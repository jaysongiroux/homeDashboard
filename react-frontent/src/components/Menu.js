import React from 'react';
import { slide as Men } from 'react-burger-menu'

class Menu extends React.Component {
    render(){
        return (
            <div className="menuContainer">
                <div className="bar">
                    <h5>Home Dashboard</h5>
                </div>

                <Men disableOverlayClick width={300}>
                    <a id="sysInfo" className="menu-item" >System Information</a>
                    <a id="homeAuto" className="menu-item" >Home Automation</a>
                    <a id="settings" className="menu-item" >Settings</a>
                </Men>
            </div>
        )
    }
}
export default Menu;