import * as React from "react";

import { AddDonor, CategoryList } from "./index.js";
import { GridList, GridTile } from 'material-ui/GridList';
class DashboardComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <AddDonor currentUser={this.props.currentUser}
                    addPost={this.props.addPost} product={this.props.product} />
                <GridList
                    cellHeight={180}
                    cols={7}
                >
                    <GridTile style={{ marginRight: 20 }}>
                        <CategoryList category={this.props.category} />
                    </GridTile>
                    <GridTile>
                    </GridTile>
                </GridList>
            </div>

        )
    }
}
export default DashboardComponent;