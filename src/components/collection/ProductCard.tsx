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
const styles: React.CSSProperties = {

};
class ProductCard extends React.Component<IProductCard, {}> {
  state = {
    showQuickAdd: false
  };

  hoverProductCard = (showQuickAdd: boolean) => {
    this.setState(prevState => ({
      ...prevState,
      showQuickAdd
    }))
  }
  
  render() {
    const { 
      state: {
        showQuickAdd
      },
      props: { 
        initialProduct
      }, 
      hoverProductCard 
    } = this;
    const styleThumbnail = {
      background: `url(${initialProduct.albums.portrait[0]}) no-repeat`,
      backgroundPosition: "center right",
      width: "100%",
      backgroundSize: "cover",
      height: "350px",
      textAlign: "center",
    }
    return (
      <Link to={`/products/${initialProduct.permalink}`} onMouseEnter={e => hoverProductCard(true)}
      onMouseLeave={e => hoverProductCard(false)}>
        <Card className="col-xs-4 product-card" >
          {/* <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="images/jsa-128.jpg" />
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
          </CardActions> */}
          <div className="thumbnail" style={styleThumbnail}>
           {
             showQuickAdd && (
               <FlatButton backgroundColor="white" hoverColor="white" style={{ width: "90%", color: "#ABACAE", position: "absolute", bottom: "10px", left: "5%" }}>+Quick Add</FlatButton>
             )
           }
          </div>
          <div className="detail">
            <div className="col-xs-7 product-title">
              {initialProduct.title}
            </div>
            <div className="col-xs-5 product-price">
              {initialProduct.price}$
            </div>
          </div>
          <div className="current-color">
            Rose
          </div>
          <div className="total-colors">
            4 colors available
          </div>
        </Card>
      </Link>
    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addCartItem: (item: any) => dispatch(addCartItem(item)),
});
export default connect(null, mapDispatchToProps)(ProductCard);
