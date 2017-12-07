import * as React from "react";
import { connect } from "react-redux";

// Import component to make layout
import Banner from "./collection/Banner";
import Breadcrumbs from "./collection/Breadcrumbs";
import SidebarMenu from "./collection/SidebarMenu";
import Category from "./collection/Category";
import { data } from "../data/data";
// Import component UI
import Paper from "material-ui/Paper";

interface IProductDetail {}

class ProductDetail extends React.Component<IProductDetail, {}> {
  render() {
    return (
      <div className="container ProductDetail">
        <Paper>
          <Breadcrumbs currentBreadcrumbs={data.currentBreadcrumbs} />
          <Paper zDepth={1} style={{ float: "left", width: "100%", marginTop: "30px"}}>
            <div className="col-xs-2 sidebar-menu">
              <SidebarMenu {...data.sidebarMenu}/>
            </div>
            <div className="col-xs-10 ProductDetail">
              {/* <Banner {...data.currentBanner}/>
              {data.categories.map(cat => <Category {...cat}/>)} */}
            </div>
          </Paper>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
