import React from 'react';
import apiLocation from './../assets/apiLocations'

class CPUInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cpu: {
                brand: null,
                cores: null,
                manufacturer: null,
                physicalCores: null,
                processors: null,
                speed: null,
                speedmax: null,
                speedmin: null
            },
            cpuDynamic:{
                currentload: null,
                currentload_system: null,
                currentload_user: null,
                currentload_idle: null,
            }
        };

        this.apiLocation = new apiLocation();
        this.listenerInterval = 3000;
        this.handleCPUInfo = this.handleCPUInfo.bind(this);
        this.getCPUCurrentLoad = this.getCPUCurrentLoad.bind(this)
    }

    componentDidMount() {
        this.getCPUInformation();
        this.getCPUCurrentLoad();
    }

    componentWillUnmount(){
        clearInterval(this.currentCPULoad)
    }

    getCPUInformation(){
        fetch(this.apiLocation.cpu())
            .then(res => res.json())
            .then( res => this.handleCPUInfo(res))
    }

    getCPUCurrentLoad(){
        // before set Interval is run
        fetch(this.apiLocation.currentLoad())
            .then(res => res.json())
            .then( res => this.handleCPUCurrentLoad(res));

        this.currentCPULoad = setInterval(() => {
            fetch(this.apiLocation.currentLoad())
                .then(res => res.json())
                .then( res => this.handleCPUCurrentLoad(res))
        }, this.listenerInterval);
    }

    handleCPUCurrentLoad(info){
        this.setState({cpuDynamic:info})
    }

    handleCPUInfo(info){
        this.setState({cpu:info});
    }

    render(){
        return (
            <div className="cpuInfoContainer">
                <div className="sysInfo col s6 m3">
                    <h5>CPU Information</h5>
                    <ul>
                        <li><b>Brand:</b> {this.state.cpu.brand}</li>
                        <li><b>Cores:</b> {this.state.cpu.cores}</li>
                        <li><b>Physical Cores:</b> {this.state.cpu.physicalCores}</li>
                        <li><b>Processors:</b> {this.state.cpu.processors}</li>
                        <li><b>Manufacturer:</b> {this.state.cpu.manufacturer}</li>
                        <li><b>Speed:</b> {this.state.cpu.speed}</li>
                        <li><b>SpeedMax:</b> {this.state.cpu.speedmax}</li>
                        <li><b>SpeedMin:</b> {this.state.cpu.speedmin}</li>
                    </ul>
                    <ul>
                        <li><b>Current Load:</b>{Math.round(this.state.cpuDynamic.currentload)}%</li>
                        <li><b>Current Load System:</b>{Math.round(this.state.cpuDynamic.currentload_system)}%</li>
                        <li><b>Current Load User:</b>{Math.round(this.state.cpuDynamic.currentload_user)}%</li>
                        <li><b>Current Load Idle:</b>{Math.round(this.state.cpuDynamic.currentload_user)}%</li>

                    </ul>
                </div>
            </div>

        )
    }
};


export default CPUInfo