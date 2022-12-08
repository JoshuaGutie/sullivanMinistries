import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../products.json";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Books from "./Books";
import Cover from "./Cover";
import About from "./About";
import Footer from "./Footer";
import Image from "next/dist/client/image";
import logoBlack from "../public/images/logoBlack.svg"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
        />
      </Head>
      <Nav />
      <MobileNav />

      <main className={styles.main}>
      <Image src={logoBlack} alt="logo" className="logo" />
        <Cover />
        <Books />
        <About />
      </main>

      <footer className={styles.footer}><Footer /></footer>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"
      />
      <div
        hidden
        id="snipcart"
        data-api-key="ZDRmMDAxYjctZGY3NC00MDg2LWFkZmItZDhiNjgyYTE2YjlkNjM3OTYwNTYwNDUzODIxNjA2"
      />
    </div>
  );
}
