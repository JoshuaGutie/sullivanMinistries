import Head from "next/head";
import styles from "../styles/Home.module.css";
import products from "../products.json";
import Nav from "./Nav";
import Cover from "./Cover";
import About from "./About";
import Footer from "./Footer";

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
      <img src="/images/logoBlack.svg" alt="logo" className="logo" />
        <Cover />
        <div className={styles.grid}>
          <span>New Book Available!</span>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
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
