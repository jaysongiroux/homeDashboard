import React from 'react';
import { slide as Men } from 'react-burger-menu'
import {Link} from "react-router-dom";

class Menu extends React.Component {
    render(){
        return (
            <div className="menuContainer">
                <div className="bar">
                    <h5>Home Dashboard</h5>
                </div>

                <Men disableOverlayClick width={300}>
                    <Link to="/" id="sysInfo" className="menu-item" >System Information</Link>
                    <Link to="/homeAuto" id="homeAuto" className="menu-item" >Home Automation</Link>
                    <Link to="/settings" className="menu-item" >Settings</Link>
                </Men>
            </div>
        )
    }
}
export default Menu;