import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { addCartItem } from "../redux/actionCreators";

interface IProductCard {
  initialProduct: any;
  addCartItem: (item: any) => any;
}

class ProductCard extends React.Component<IProductCard, {}> {
  state = {};
  render() {
    const { props: { initialProduct } } = this;
    return (
      <Link to={`/products/${initialProduct.permalink}`}>
        <Card>
          <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg" />
          <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
            <img src="images/nature-600-337.jpg" alt="" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla
            facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis
            quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </Link>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addCartItem: (item: any) => dispatch(addCartItem(item)),
});
export default connect(null, mapDispatchToProps)(ProductCard);
