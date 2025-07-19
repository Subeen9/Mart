import { useState, useEffect } from "react";
import CustomCard from "../components/cardComponent";

interface Product {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
}

function Shop() {
    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=6"); //fetching from api
                const data = await response.json();
                setProduct(data); // now product will be data
            } catch (e) {
                console.log("Error", e);
            }
        };
        fetchProduct();
    }, []); // runs only once

    return (
        <>
            <div>Shop Page
                <div className="row">
                    {product.map((product) => (
                        <div key={product.id} className="col-sm-6 col-md-4">
                            <CustomCard
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                description={product.description}
                                btnName="Add to Cart"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Shop;
