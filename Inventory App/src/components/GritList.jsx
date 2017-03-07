import React, { Component } from "react";
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { browserHistory } from "react-router"
import LoadingHOC from "./../HOC/LoadingHoc.jsx"
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        maxWidth: 800,
        height: 450,
        overflowY: 'auto',
    },
};

class StoreList extends Component {
    constructor() {
        super()
    }
    gotoStoreDetail = (storeKey) => {
        browserHistory.push({
            pathname: '/dashboard/storedetail',
            query: { key: storeKey }
        })
    }
    render() {
        let {store} = this.props
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {Object.keys(store).map((value) => (
                        <GridTile
                            key={value}
                            onClick={() => { this.gotoStoreDetail(value) }}
                        >
                            <Card>
                                <CardText>
                                    <h3>Name: {store[value].name}</h3>
                                    <h3>Location: {store[value].location}</h3>
                                </CardText>
                            </Card>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

export default LoadingHOC('store')(StoreList)