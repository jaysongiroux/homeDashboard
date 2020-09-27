import React from 'react';
import '../../pages/main_window/dashboard.css'
import SystemInformation from '../../components/SystemInformation'
import Menu from '../../components/Menu'
import DownContainer from '../../components/DownContainer'
import CPUPlot from '../../components/CPUPlot'
import '../../pages/main_window/css/materialize.css'

function SysInfoPage() {
    return (
        <div className="App">
            <Menu />
            <div className="container">
                <div className="row">
                    <CPUPlot />
                    <DownContainer />
                    <SystemInformation />
                </div>
            </div>
        </div>
    );
}

export default SysInfoPage;
