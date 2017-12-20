import * as React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import { data } from "../../data/data";

interface ICategory {
  title: string;
  products: any[];
}
const Category: React.SFC<ICategory> = props => {
  const { title, products } = props;
  return (
    <div className="category">
      <h3>{title}</h3>
      {products.map((e, i) => <ProductCard key={`productCard-${i}`} {...{ initialProduct: e, index: i }} />)}
    </div>
  );
};

export default Category;
