import type { NextPage } from "next";
import Head from "next/head";

import FacebookLogo from "../components/logos/Facebook";
import ElasticLogo from "../components/logos/Elastic";
import BekkLogo from "../components/logos/Bekk";
import JavaScriptLogo from "../components/logos/JavaScript";
import GithubLogo from "../components/logos/Github";
import CogniteLogo from "../components/logos/Cognite";
import styles from "../styles/Home.module.css";
import LinkedInLogo from "../components/logos/LinkedIn";

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Kim Joar Bekkelund</title>
        <meta name="description" content="The website of Kim Joar Bekkelund" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kim Joar Bekkelund</h1>
        <p className={styles.description}>
          Engineering Director at{" "}
          <a href="https://www.cognite.com/company/careers/">Cognite</a>
          <CogniteLogo />
          <br />
          Previously at <a href="https://facebook.com/Engineering/">Facebook</a>
          <FacebookLogo />, <a href="https://elastic.co">Elastic</a>
          <ElasticLogo /> and <a href="https://bekk.no">Bekk Consulting</a>
          <BekkLogo />
        </p>
        <p className={styles.description}>
          Sometimes I{" "}
          <a href="https://github.com/kimjoar">contribute to open source</a>
          <GithubLogo />
        </p>
        <p className={styles.description}>
          Years ago I co-created{" "}
          <a href="http://superherojs.com">Superhero.js</a> to help people get
          started with JavaScript
          <JavaScriptLogo />
        </p>
        <p className={styles.description}>
          You can get in touch at{" "}
          <a href="mailto:hei@kimjoar.net">hei@kimjoar.net</a> or on{" "}
          <a href="https://www.linkedin.com/in/kimjoar/">LinkedIn</a>
          <LinkedInLogo />
        </p>
      </main>
    </div>
  );
};

export default Home;
