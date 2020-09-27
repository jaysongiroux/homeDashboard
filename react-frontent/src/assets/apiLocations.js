import React from 'react'

class apiLocations extends React.Component{
    constructor(props){
        super(props);
        this.base = "http://192.168.1.21:9000/";
        this.systemInfo = this.base + "getSystemInfo/";
        this.bindMethods()
    }

    bindMethods(){
        this.cpu = this.cpu.bind(this);
        this.cpuTemp = this.cpuTemp.bind(this);
        this.cpuTemp = this.cpu.bind(this);
        this.cpuCurrentSpeed = this.cpuCurrentSpeed.bind(this);
        this.currentLoad = this.currentLoad.bind(this);
        this.processes = this.processes.bind(this);
        this.sys = this.sys.bind(this);
        this.networkInterfaces = this.networkInterfaces.bind(this);
        this.networkGatewayDefault = this.networkGatewayDefault.bind(this);
        this.networkStats = this.networkStats.bind(this);
        this.wifiNetworks = this.wifiNetworks.bind(this);
        this.networkInterfaceDefault = this.networkInterfaceDefault.bind(this);
        this.getDynamicData = this.getDynamicData.bind(this);
        this.getMemory = this.getMemory.bind(this);
        this.getPingAPI = this.getPingAPI.bind(this);
        this.pingPlotData = this.pingPlotData.bind(this);
        this.currentLoadPlot = this.currentLoadPlot.bind(this);
    }

    cpu(){return this.systemInfo + "cpu"}
    cpuTemp(){return this.systemInfo + "cpuTemp"}
    cpuCurrentSpeed(){return this.systemInfo + "cpuCurrentSpeed"}
    currentLoad(){return this.systemInfo + "currentLoad"}
    processes(){return this.systemInfo + "processes"}
    sys(){return this.systemInfo + "system"}
    networkInterfaces(){return this.systemInfo + "networkInterfaces"}
    networkGatewayDefault(){return this.systemInfo + "networkGatewayDefault"}
    networkStats(){return this.systemInfo + "networkStats"}
    networkInterfaceDefault(){return this.systemInfo + "networkInterfaceDefault"}
    wifiNetworks(){return this.systemInfo + "wifiNetworks"}
    getDynamicData(){return this.systemInfo + "getDynamicData"}
    getMemory(){return this.systemInfo + "mem"}
    currentLoadPlot(){return this.systemInfo + "currentLoadPlot"}

    getPingAPI(){return this.base + "getPingAPI"}
    pingPlotData(){return this.base + "getPingAPI/" + "pingPlotData"}

}

export default apiLocations
