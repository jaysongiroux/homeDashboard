import React from 'react';
import './pages/main_window/dashboard.css'
import SysInfoPage from './pages/main_window/SysInfoPage'
import HomeAuto from './pages/homeAuto/HomeAutoPage'
import './pages/main_window/css/materialize.css'
import Settings from './pages/Settings/Settings'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" ><SysInfoPage/></Route>
                <Route path="/homeAuto"><HomeAuto /></Route>
                <Route path="/settings"><Settings /></Route>
            </Switch>
        </Router>
  );
}

export default App;
