import React from 'react';
import apiLocation from './../assets/apiLocations'

class SystemInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            system: {
                manufacturer: null,
                model: null,
                serial: null,
                uuid: null,
                sku: null,
            }
        };
        this.apiLocations = new apiLocation();
        this.handleSystemInfo = this.handleSystemInfo.bind(this);
        this.getSystemInformation = this.getSystemInformation.bind(this);
    }

    componentDidMount() {
        this.getSystemInformation()
    }

    getSystemInformation(){
        fetch(this.apiLocations.sys())
            .then(res => res.json())
            .then( res => this.handleSystemInfo(res))
    }

    handleSystemInfo(info){
        this.setState({system:info})
    }

    render(){
        return (
            <div className="sysInfoContainer">
                <div className="sysInfo col s6 m3">
                    <h5>System Information</h5>
                    <ul>
                        <li><b>manufacturer:</b> {this.state.system.manufacturer}</li>
                        <li><b>model:</b> {this.state.system.model}</li>
                        <li><b>serial:</b> {this.state.system.serial}</li>
                        <li><b>uuid:</b> {this.state.system.uuid}</li>
                        <li><b>sku:</b> {this.state.system.sku}</li>                    </ul>
                </div>
            </div>

        )
    }
};


export default SystemInfo