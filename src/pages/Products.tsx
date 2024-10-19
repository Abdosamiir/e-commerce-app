// import React from "react";
import { Grid } from "@mantine/core";
import ProductCard from "../components/ProductCard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

type Ierr = {
  err: string;
};

type Product = {
  id: number;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (() => {
      axios
        .get("http://localhost:1337/api/products")
        .then((res) => setProducts(res.data.data))
        .catch((err: Ierr) => console.log(err));
    })();
  }, []);
  return (
    <Grid>
      {products.map((product) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <ProductCard key={product.id} {...product} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Products;
