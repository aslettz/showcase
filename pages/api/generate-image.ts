import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import sharp from 'sharp';
import Color from 'color';
// @ts-ignore
import { NFTStorage, File } from 'nft.storage';
import {Network, Alchemy, Wallet} from "alchemy-sdk";
import dotenv from "dotenv";
import {ethers} from "ethers";
import contractJson from "../../AslettcoToken.json";

dotenv.config();
const { ALCHEMY_API_KEY , CRYPTO_PRIVATE_KEY, NFT_STORAGE_API_KEY, ACT_CONTRACT_ADDRESS } = process.env;

const settings = {
  apiKey: ALCHEMY_API_KEY as string,
  network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);
let wallet = new Wallet(CRYPTO_PRIVATE_KEY as string, alchemy);
const contractBackend = new ethers.Contract(ACT_CONTRACT_ADDRESS as string, contractJson.abi, wallet);
const nftstorage = new NFTStorage({ token: NFT_STORAGE_API_KEY as string })

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  console.log("ACT_CONTRACT_ADDRESS: ", ACT_CONTRACT_ADDRESS); //Z-Test

  let address = req.query["address"] as string;
  if (address == undefined || address == null || address.length < 42) {
    res.status(400).send("Address is invalid");
  }

  console.log('Generating image'); //Z-Test
  const {imageBuffer, colorHexCode} = await generateImage(address);
  console.log('Uploading to nft storage'); //Z-Test
  const metadataUrl = await uploadImage(address, colorHexCode, imageBuffer)
  console.log("metadataUrl: ", metadataUrl); //Z-Test
  console.log('Minting token'); //Z-Test
  await mintToken(address, metadataUrl);
  console.log('Finished minting'); //Z-Test

  res.setHeader('Content-Type', 'image/png');
  // @ts-ignore
  res.send(imageBuffer);
}

async function generateImage(address: string): Promise<{ imageBuffer: Buffer, colorHexCode: string }> {
  const redIndex = Math.round((Math.random() * 38)) + 2;
  const greenIndex = Math.round((Math.random() * 38)) + 2;
  const blueIndex = Math.round((Math.random() * 38)) + 2;

  const redByteStr = address[redIndex] + address[redIndex + 1];
  const greenByteStr = address[greenIndex] + address[greenIndex + 1];
  const blueByteStr = address[blueIndex] + address[blueIndex + 1];

  const colorHexCode = '#' + redByteStr + greenByteStr + blueByteStr;
  const color = Color(colorHexCode);

  const filePath = path.resolve(process.cwd(), 'public/aslettco.png')
  const output = await sharp(filePath)
      .tint(color.object())
      .toBuffer();

  return {imageBuffer: output, colorHexCode: colorHexCode};
}

async function uploadImage(address: string, colorHexCode: string, image: Buffer): Promise<string> {
  const name = "Aslettco Token Image"
  const description = "An NFT image for Zan Aslett's portfolio site NFT collection";

  var token = await nftstorage.store({
    image: new File([image], "token.png", {type: "image/png"}),
    name,
    description,
    properties: {
      color: colorHexCode,
      mintedTo: address,
      mintDate: Date.now(),
    }
  });

  return token.url;
}

async function mintToken(address: string, url: string) {
  await contractBackend.safeMint(address, url);
}