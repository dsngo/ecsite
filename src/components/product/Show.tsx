import * as React from "react";
import { connect } from "react-redux";

// Import component to make layout
import Breadcrumbs from "../collection/Breadcrumbs";
import SidebarMenu from "../collection/SidebarMenu";
import { data } from "../../data/data";
import Detail from "./Detail";
import SimilarProduct from "./SimilarProducts";
import UserReview from "./UserReviews";
// Import component UI
import Paper from "material-ui/Paper";

const styles: { [key: string]: React.CSSProperties } = {
};

interface ICollection {
  // product: any;
  productPermalink: string;
}

class Collection extends React.Component<ICollection, {}> {
  state = {
    focus: 0,
  }
  handleUpdateState =(key: string, value:any) => this.setState((prevState)=>({...prevState, [key]: value}))
  render() {
    // const { product } = this.props;
    const foundProd = data.categories[0].products[0]; // for test data
    return (
      <div className="container collection">
        <Paper>
          <Breadcrumbs currentBreadcrumbs={data.currentBreadcrumbs} />
          <div className="col-xs-2">
            <SidebarMenu {...data.sidebarMenu} />
          </div>
          <div className="col-xs-10">
            <Paper zDepth={1}>
              {foundProd.title}
              {foundProd.albums.gallery.map((e,i) => (
                <div key={`timg-${i}`} className={`${foundProd.styledClass} ${this.state.focus === i ? "thumb-img-focus":""}`} ><img onClick={()=>this.handleUpdateState("focus", i)} src={e} alt="" /></div>                
              ))}
            </Paper>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
