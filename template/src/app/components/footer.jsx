import React, { Component } from "react"
import { Item } from "./index.js"
export default class Footer extends React.Component {
    render() {
        let date = new Date();
        date = date.toISOString()
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul>
                            <Item name="Home" />
                            <Item name="Company" />
                            <Item name="Portfolio" />
                            <Item name="Blog" />
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {date} <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
        </p>
                </div>
            </footer>

        )
    }
}