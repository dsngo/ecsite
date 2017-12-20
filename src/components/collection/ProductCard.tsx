import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { addCartItem } from "../redux/actionCreators";

interface IProductCard {
  initialProduct: any;
  index: number;
  addCartItem: (item: any) => any;
}
const styles: { [key: string]: React.CSSProperties } = {
  thumbnail: {
    backgroundPosition: "center right",
    width: "100%",
    backgroundSize: "cover",
    height: "280px",
  },
};
class ProductCard extends React.Component<IProductCard, {}> {
  state = {};
  handleAddCardItem = (e: any) => {
    e.preventDefault();
    this.props.addCartItem(this.props.initialProduct);
  }
  render() {
    const { props: { initialProduct, index }, handleAddCardItem } = this;
    const styleThumbnail = { ...styles.thumbnail, background: `url(${initialProduct.albums.portrait[0]}) no-repeat` };
    return (
      <div>
        <Link to={`/products/${initialProduct.permalink}`}>
          <Card className="col-xs-4 product-card">
            <CardMedia overlay={<CardTitle title={initialProduct.title} subtitle={initialProduct.details.additional_details[0]} />}>
              <img src={initialProduct.albums.portrait[0]} alt="" />
            </CardMedia>
            <CardText>
              {initialProduct.styles[index].title}
            </CardText>
            <CardActions>
                <FlatButton onClick={handleAddCardItem} label="Action1" />
            </CardActions>
          </Card>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addCartItem: (item: any) => dispatch(addCartItem(item)),
});
export default connect(null, mapDispatchToProps)(ProductCard);
