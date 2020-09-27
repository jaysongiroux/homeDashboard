import React from 'react';
import CpuInfo from './CpuInfo'
import SystemInfo from './SystemInfo'
import NetworkInfo from './NetworkInfo'
import MemoryInfo from './MemoryInfo'

class SystemInformation extends React.Component{
    render(){
        return (
            <div className="sysInfo row">
               <CpuInfo />
               <SystemInfo />
               <NetworkInfo />
               <MemoryInfo />
            </div>
        )
    }
};


export default SystemInformation