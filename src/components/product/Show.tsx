import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// Import component to make layout
import Banner from "../collection/Banner";
import Breadcrumbs from "../collection/Breadcrumbs";
import SidebarMenu from "../collection/SidebarMenu";
import Category from "../collection/Category";
import { data } from "../../data/data";
// Import component UI
import Paper from "material-ui/Paper";
import FlatButton from "material-ui/FlatButton";
import SimilarProducts from "./SimilarProducts";
interface IProductShow {
  productPermalink: string;
}
const styles: { [key: string]: React.CSSProperties } = {};
class ProductShow extends React.Component<IProductShow, {}> {
  state = {
    focus: 0,
  };
  handleUpdateState = (key: string, value: any) => this.setState(prevState => ({ ...prevState, [key]: value }));
  render() {
    const product = data.product;
    const foundProd = data.categories[0].products[0]; // for test data

    return (
      <div className="container collection">
        <Paper>
          <Breadcrumbs currentBreadcrumbs={data.currentBreadcrumbs} />
          <Paper zDepth={1} style={{ float: "left", width: "100%", marginTop: "30px" }}>
            <div className="col-xs-2 sidebar-menu">
              <SidebarMenu {...data.sidebarMenu} />
            </div>
            <div className="col-xs-10 product-detail">
              <div className="row">
                <div className="col-xs-8" style={{ display: "flex" }}>
                  <div className="product-gallery-thumbs">
                    <div className="sticky-thumb-container">
                      <div className="sticky-thumb-items">
                        {product.images.map((e, i) => (
                          <div
                            key={`timg-${i}`}
                            className={`${foundProd.styledClass} ${this.state.focus === i ? "thumb-img-focus" : ""}`}
                          >
                            <img onClick={() => this.handleUpdateState("focus", i)} src={e} alt="" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="product-gallery-assets">
                    <div className="product-gallery-assets-container">
                      {product.images.map((img:any, i: number) => (
                        <div key={`img-${i}`} className="image-item">
                          <img src={img} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-xs-4 product-info">
                  <div className="title-price">
                    {product.name} - ${product.price}
                  </div>
                  <div className="traditional-retail">Traditional Retail: ${product.traditionalPrice}</div>
                  <div className="colors">
                    <div className="current-color">{product.colors[0].name}</div>
                    {product.colors.map((color, idx) => <a key={`color-${idx}`} className="product-color" style={{ backgroundColor: color.code }} />)}
                  </div>
                  <div className="sizes">
                    <div>
                      <Link to="#">Size Guide</Link>
                    </div>
                    <div className="size-list">{product.sizes.map((size, i) => <div key={`size-${i}`} className="product-size">{size}</div>)}</div>
                  </div>
                  <div className="btn-add-to-bag">
                    <FlatButton
                      fullWidth
                      backgroundColor="#2c2c2c"
                      hoverColor="#323232"
                      label="ADD TO BAG"
                      labelStyle={{ color: "white" }}
                    />
                  </div>
                  <div className="details" />
                  <div className="description">
                    <div className="title">Description</div>
                    <div className="content">
                      It doesn't get more classic than a crew. This crewneck sweater is warm, soft to the touch, and lightweight
                      with a slightly relaxed fit for an easy, timeless look. Did we mention it's Grade-A Mongolian cashmere?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
