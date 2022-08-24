import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProductCompanent from "./ProductCompanent";
import { setProducts } from "./redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();

  /*const fetchProducts = () => {
    const response = fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((response) => console.log(response));

    dispatch(setProducts(response.data));
  };*/
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  //console.log("Products", products);

  return (
    <div className="ui grid container">
      <ProductCompanent />
    </div>
  );
};

export default ProductListing;
