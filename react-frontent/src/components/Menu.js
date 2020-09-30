import React from 'react';
import { slide as Men } from 'react-burger-menu'
import {Link} from "react-router-dom";

class Menu extends React.Component {
    constructor(props){
        super(props);
        let date = new Date().toDateString();
        let time = new Date().toLocaleTimeString();
        this.state = {
            time: time,
            date: date
        };

        this.setTimeAndDate = this.setTimeAndDate.bind(this)
    }

    componentDidMount(){
        this.setTimeAndDate()
    }

    componentWillUnmount(){
        clearInterval(this.TimeAndDate)
    }

    setTimeAndDate(){
        this.TimeAndDate = setInterval(()=> {
            let date = new Date().toDateString();
            let time = new Date().toLocaleTimeString();
            this.setState({date: date});
            this.setState({time: time});
        },  1000) //update every second
    }

    render(){
        return (
            <div className="menuContainer">
                <div className="bar">
                    <h5>Home Dashboard</h5>
                    <div className="dateAndTimeContainer">{this.state.date}<br /> {this.state.time}</div>
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