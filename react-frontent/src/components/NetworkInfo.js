import React from 'react';
import apiLocation from './../assets/apiLocations'

class SystemInformation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gateway: null,
            network: {
                iface:null,
                operstate:null,
                rx_bytes:null,
                rx_dropped:null,
                rx_errors:null,
                tx_bytes:null,
                tx_dropped:null,
                tx_errors:null,
                rx_sec:null,
                tx_sec:null,
                ms:null
            }
        };
        this.apiLocations = new apiLocation();
        this.handleNetworkInfo = this.handleNetworkInfo.bind(this);
        this.handleNetworkStats = this.handleNetworkStats.bind(this);
        this.getNetworkInformation = this.getNetworkInformation.bind(this);
        this.getNetworkStats = this.getNetworkStats.bind(this)
    }

    componentDidMount() {
        this.getNetworkInformation();
        this.getNetworkStats();
    }

    getNetworkInformation(){
        fetch(this.apiLocations.networkGatewayDefault())
            .then(res => res.json())
            .then( res => this.handleNetworkInfo(res))
    }

    getNetworkStats(){
        fetch(this.apiLocations.networkStats())
            .then(res => res.json())
            .then( res => this.handleNetworkStats(res))    }

    handleNetworkInfo(info){
        this.setState({gateway:info})
    }

    handleNetworkStats(info){
        this.setState({network:info[0]})
    }

    render(){
        return (
            <div className="sysInfoContainer">
                <div className="sysInfo col s6 m3">
                    <h5>Network Information</h5>
                    <ul>
                        <li><b>Gateway:</b> {this.state.gateway}</li>
                        <li><b>iface:</b> {this.state.network.iface}</li>
                        <li><b>operstate:</b> {this.state.network.operstate}</li>
                    </ul>
                </div>
            </div>

        )
    }
};


export default SystemInformation