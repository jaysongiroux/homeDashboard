import React from 'react';
import apiLocation from './../assets/apiLocations'

class MemoryInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mem:{
                total:null,
                free:null,
                used: null,
                active: null,
                available: null,
                buffers: null,
                cached: null,
                slab: null,
                buffcache: null,
                swaptotal: null,
                swapused: null,
                swapfree: null,
            }
        };
        this.listenerInterval = 3000;
        this.apiLocations = new apiLocation();
        this.getMemInfo = this.getMemInfo.bind(this);
        this.handleMemInfo = this.handleMemInfo.bind(this)
    }

    componentDidMount() {
        this.getMemInfo();
    }

    componentWillUnmount(){
        clearInterval(this.memInfo)
    }

    getMemInfo(){
        fetch(this.apiLocations.getMemory())
            .then(res => res.json())
            .then( res => this.handleMemInfo(res))

        this.memInfo = setInterval(() => {
            fetch(this.apiLocations.getMemory())
                .then(res => res.json())
                .then( res => this.handleMemInfo(res))
        }, this.listenerInterval)
    }

    handleMemInfo(info){
        this.setState({mem:info})
    }

    render(){
        return (
            <div className="sysInfoContainer">
                <div className="sysInfo col s6 m3">
                    <h5>Memory Information</h5>
                    <ul>
                        <li><b>Total:</b> {Math.round(this.state.mem.total/1024/1024/1024)} GB</li>
                        <li><b>Free:</b> {Math.round(this.state.mem.free/1024/2014)} mb</li>
                        <li><b>Used:</b> {Math.round(this.state.mem.used/1024/2014)} mb</li>
                        <li><b>Swap Total:</b> {Math.round(this.state.mem.swaptotal/1024/2014)} mb</li>
                        <li><b>Swap Used:</b> {Math.round(this.state.mem.swapused/1024/2014)} mb</li>
                        <li><b>Swap Free:</b> {Math.round(this.state.mem.swapfree/1024/2014)} mb</li>
                    </ul>
                </div>
            </div>

        )
    }
};


export default MemoryInfo