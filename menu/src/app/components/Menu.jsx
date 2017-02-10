import React from "react";
import Link from "./Link.jsx"
class Menu extends React.Component {
    componentWillMount() {
        // fetch('./../menus.json')
        //     .then((response) => { console.log("resssssssssssssssss", response); response.json() })
        //     .then((users) => { console.log("usersssssssss", users) })
    }
    menus = ['Home',
        'About',
        'Services',
        'Portfolio',
        'Contact us']
    render() {
        return (
            <div>
                {this.menus.map((val, i) => {
                    return <div key={i}>
                        <Link label={val}></Link>
                    </div>
                })}
            </div>
        )
    }
}
export default Menu;