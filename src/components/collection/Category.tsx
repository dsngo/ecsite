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
<<<<<<< HEAD
    <div>
      <h1>{title}</h1> {products.map((e,i)=><ProductCard key={`productCard-${i}`} initialProduct={e} />)}
=======
    <div className="category">
      <h3>{title}</h3> 
      {products.map((e,i)=><ProductCard key={`productCard-${i}`} initialProduct={e} />)}
>>>>>>> e1246b664d4b87e4a89699841ddc8878f4598ad0
    </div>
  );
};

export default Category;
