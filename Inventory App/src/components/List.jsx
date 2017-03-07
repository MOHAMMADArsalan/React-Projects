import React, { Component } from "react";
// material-ui
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
let SelectableList = makeSelectable(List);
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

// HOC HIGH ORDER COMPONENT;

import LoadingHOC from "./../HOC/LoadingHoc.jsx";

class CategoryList extends Component {
    render() {
        return (
            <Card style={{ height: "100vh" }}>
                <SelectableList >
                    <Subheader> <h3>Category</h3></Subheader>
                    {Object.keys(this.props.category).map((key) => {
                        return <ListItem key={key}
                            value={key}
                            primaryText={this.props.category[key]}
                        />
                    })}
                </SelectableList>
            </Card>
        )
    }
}
export default LoadingHOC('category')(CategoryList)