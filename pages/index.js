import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../products.json";
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
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
        />
      </Head>
      <Nav />
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
