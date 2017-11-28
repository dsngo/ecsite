import * as React from "react";
import { connect } from "react-redux";

// Import component to make layout
import Banner from "./collection/Banner";
import Breadcrumbs from "./collection/Breadcrumbs";
import SidebarMenu from "./collection/SidebarMenu";
import Category from "./collection/Category";

interface ICollection {}

class Collection extends React.Component<ICollection, {}> {
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect (mapStateToProps, mapDispatchToProps) (Collection);