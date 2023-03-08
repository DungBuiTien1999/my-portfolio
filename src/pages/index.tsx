import Head from "next/head";
import styles from "@src/styles/home/home.module.scss";
import { HomeSection } from "@src/containers/Home";
import { AboutSection } from "@src/containers/About";
import { Services } from "@src/containers/Services";
import { Portfolio } from "@src/containers/Portfolio";
import { Blogs } from "@src/containers/Blogs";
import { Contacts } from "@src/containers/Contacts";
import { SuccessfulModal } from "@src/components/Modal/SuccessfulModal";
import { FailureModal } from "@src/components/Modal/FailureModal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dung Bui Tien - Portfolio</title>
        <meta
          name="description"
          content="My portfolio page, intruduce about myself"
        />
        <meta
          name="keyword"
          content="portfolio, typescript, nextjs, javascript, developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Bui Tien Dung | Front End Web Developer"
        />
        <meta
          property="og:description"
          content="My portfolio page, intruduce about myself"
        />
        <meta property="og:image" content="/images/hero.webp" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <HomeSection />
        <AboutSection />
        <Services />
        <Portfolio />
        <Blogs />
        <Contacts />
        <SuccessfulModal />
        <FailureModal />
      </div>
    </>
  );
}
