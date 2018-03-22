import * as React from "react";
import connect from "react-redux/es/connect/connect";
import { data } from "../../data/data";
import Link from "react-router-dom/es/Link";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const styles: {[key: string]: React.CSSProperties} = {

}


interface ISP {
  products: any;
}

const SPChildren: React.SFC<any> = props => {
  const { permalink, portrait, title, price, style } = props;
  return (
    <Link to={`/products/${permalink}`}>
      <Card className="col-xs-4 product-card">
        <CardMedia overlay={<CardTitle title={title} subtitle="Overlay subtitle" />}>
          <img src={portrait} alt="" />
        </CardMedia>
        <CardText>{title}</CardText>
      </Card>
    </Link>
  );
};

const SimilarProducts: React.SFC<ISP> = props => {
  const { products } = props;
  return (
    <div>
      <div>SIMILAR PRODUCTS YOU MIGHT LIKE</div>
      {products.slice(0, 13).map((product: any) => {
        return (
          <SPChildren
            {...{
              permalink: product.permalink,
              portrait: product.albums.portrait[0],
              title: product.title,
              price: product.price,
              style: product.styles[0].title,
            }}
          />
        );
      })}
      <hr />
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SimilarProducts);
