import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { addCartItem, addFavoriteItem, removeFavoriteItem } from "../redux/actionCreators";

interface IProductCard {
  initialProduct: any;
  index: number;
  addCartItem: (item: any) => any;
  addFavoriteItem: (item: any) => any;
  removeFavoriteItem: (itemId: number) => any;
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
  state = {
    showQuickAdd: false,
  };

  hoverProductCard = (showQuickAdd: boolean) => {
    this.setState(prevState => ({
      ...prevState,
      showQuickAdd,
    }));
  };
  render() {
    const { state: { showQuickAdd }, props: { initialProduct }, hoverProductCard } = this;
    const styleThumbnail = {
      background: `url(${initialProduct.albums.portrait[0]}) no-repeat`,
      backgroundPosition: "center right",
      width: "100%",
      backgroundSize: "cover",
      height: "350px",
      textAlign: "center",
    };
    return (
      <Link
        to={`/products/${initialProduct.permalink}`}
        onMouseEnter={e => hoverProductCard(true)}
        onMouseLeave={e => hoverProductCard(false)}
      >
        <Card className="col-xs-4 product-card">
          <div className="thumbnail" style={styleThumbnail}>
            {showQuickAdd && (
              <FlatButton
                onClick={()=>addCartItem(initialProduct)}
                backgroundColor="white"
                hoverColor="white"
                style={{ width: "90%", color: "#ABACAE", position: "absolute", bottom: "10px", left: "5%" }}
              >
                + Quick Add
              </FlatButton>
            )}
          </div>
          <div className="detail">
            <div className="col-xs-7 product-title">{initialProduct.title}</div>
            <div className="col-xs-5 product-price">{initialProduct.price}$</div>
          </div>
          <div className="current-color">Rose</div>
          <div className="total-colors">4 colors available</div>
        </Card>
      </Link>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addCartItem: (item: any) => dispatch(addCartItem(item)),
  addFavoriteItem: (item: any) => dispatch(addFavoriteItem(item)),
  removeFavoriteItem: (itemId: number) => dispatch(removeFavoriteItem(itemId)),
});
export default connect(null, mapDispatchToProps)(ProductCard);
