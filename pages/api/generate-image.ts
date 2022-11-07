// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sharp from 'sharp';
import Color from 'color';

type Data = {
  name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  const address = req.query["address"];
  const redIndex = Math.round((Math.random() * 38)) + 2;
  const greenIndex = Math.round((Math.random() * 38)) + 2;
  const blueIndex = Math.round((Math.random() * 38)) + 2;

  const redByteStr = address[redIndex] + address[redIndex + 1];
  const greenByteStr = address[greenIndex] + address[greenIndex + 1];
  const blueByteStr = address[blueIndex] + address[blueIndex + 1];

  const colorHexStr = '#' + redByteStr + greenByteStr + blueByteStr;

  const color = Color(colorHexStr);
  const output = await sharp('public/aslettco.png')
      .tint(color.object())
      .toBuffer();

  res.setHeader('Content-Type', 'image/png');
  // @ts-ignore
  res.send(output);
}
