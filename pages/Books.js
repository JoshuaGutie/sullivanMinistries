import React, {useState} from "react"
import products from "../products.json"
import styles from "../styles/Home.module.css";
import { Button } from '@mui/material';



function Books() {
    const [showMore, setShowMore] = useState(false)
    return ( 
        <><span className="text">New Book Available!</span><div className={styles.grid}>
            {products.map((product) => {
                return (
                    <div key={product.id} className={styles.card}>
                        <img src={product.image} alt={`Preview of ${product.title}`} />
                        <h3>{product.title}</h3>
                        {showMore ? `${product.description}` : `${product.description.substring(0, 225)}`}
                        <Button onClick={() => setShowMore(!showMore)}>
                            {showMore ? "Show less" : "Show More"}
                        </Button>
                        <p>${product.price}</p>
                        <div className="button">
                            <Button
                                color="primary"
                                variant="outlined"
                                type="primary"
                                className="snipcart-add-item"
                                data-item-id={product.id}
                                data-item-image={product.image}
                                data-item-name={product.title}
                                data-item-price={product.price}
                                data-item-url={product.url}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                );
            })}
        </div></>
     );
}

export default Books;