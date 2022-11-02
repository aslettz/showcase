import type {NextPage} from 'next'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import {motion} from "framer-motion";
import InfoSection, {InfoSectionTypes} from "../components/infoSection";
import styled from "styled-components";
import {Element} from "react-scroll/modules";

const Main = styled.div`
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`

const BigElement = styled(Element)`
  min-height: 80vh;
`

const Home: NextPage = () => {

  return (

    <div className={styles.container}>
      <Head>
        <title>Zan Aslett</title>
        <meta name="description" content="Portfolio site for Zan Aslett" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <Main id={'main'} className={styles.main}>
          <BigElement name={'Home'} className={'BigElement'}>
              <InfoSection infoSectionType={InfoSectionTypes.Home} anchorId={'home'}/>
          </BigElement>
        <BigElement name={'about-me'}>
            <InfoSection infoSectionType={InfoSectionTypes.AboutMe} anchorId={'about-me'}/>
        </BigElement>
          <BigElement name={'skills'}>
              <InfoSection infoSectionType={InfoSectionTypes.Skills} anchorId={'skills'}/>
          </BigElement>
          <BigElement name={'experience'}>
              <InfoSection infoSectionType={InfoSectionTypes.Experience} anchorId={'experience'}/>
          </BigElement>
          <BigElement name={'education'}>
              <InfoSection infoSectionType={InfoSectionTypes.Education} anchorId={'education'}/>
          </BigElement>
          <BigElement name={'side-projects'}>
              <InfoSection infoSectionType={InfoSectionTypes.SideProjects} anchorId={'side-projects'}/>
          </BigElement>
      </Main>
    </div>
  )
}

export default Home;
