import * as React from "react";
import { connect } from "react-redux";

// Import component to make layout
import Breadcrumbs from "../collection/Breadcrumbs";
import SidebarMenu from "../collection/SidebarMenu";
import { data } from "../../data/data";
// Import component UI
import Paper from "material-ui/Paper";

interface ICollection {}

class Collection extends React.Component<ICollection, {}> {
  state = {
    categories: [],
  };
  render() {
    const { categories } = this.state;
    return (
      <div className="container collection">
        <Paper>
          <Breadcrumbs currentBreadcrumbs={data.currentBreadcrumbs} />
          <div className="col-xs-2">
            <SidebarMenu {...data.sidebarMenu}/>
          </div>
          <div className="col-xs-10">
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
