import * as React from "react";
import { connect } from "react-redux";

// Import component to make layout
import Banner from "./collection/Banner";
import Breadcrumbs from "./collection/Breadcrumbs";
import SidebarMenu from "./collection/SidebarMenu";
import Category from "./collection/Category";

// Import component UI
import Paper from "material-ui/Paper";


interface ICollection {}

class Collection extends React.Component<ICollection, {}> {
    state = {
        categories: []
    }
    render() {
        const {categories} = this.state;
        return (
            <div className="container">
                <Paper>
                    <Breadcrumbs />
                    <div className="col-xs-2">
                        <SidebarMenu />
                    </div>
                    <div className="col-xs-10">
                        <Banner />
                        {
                            categories.map((cat) => (
                                <Category />
                            ))
                        }
                    </div>
                </Paper>             
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect (mapStateToProps, mapDispatchToProps) (Collection);