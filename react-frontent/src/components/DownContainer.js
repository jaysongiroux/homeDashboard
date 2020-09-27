import React from 'react';
import {ResponsiveContainer,LineChart,Line,XAxis,Tooltip,CartesianGrid,Legend,Label,YAxis} from 'recharts'

import apiLocation from './../assets/apiLocations'

class DownContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            target: "",
            status: "",
            message: "",
            time: 0,
            data: [],
            counter: 0,
            animate:true
        };

        this.listenerInterval = 5000; //normally 5 seconds
        this.apiLocations = new apiLocation();
        this.callAPI = this.callAPI.bind(this);
        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {
        setInterval(() => {
            fetch(this.apiLocations.pingPlotData())
                .then(res => res.json())
                .then(res => this.handleApiResponse(res))
        },this.listenerInterval)
    }

    handleApiResponse(info){
        this.setState({data:info});
    }

    render(){
        return (
            <div className="plot col s12 m6">
                <h5 className="grey-text">Ping Graph</h5>
                <ResponsiveContainer width='100%' aspect={4.0/2.0}>
                    <LineChart className="grey-text" data={this.state.data} syncId="pingGraph" is>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Legend
                            onMouseEnter={this.handleLegendMouseEnter}
                            onMouseLeave={this.handleLegendMouseLeave}
                        />
                        <XAxis type="number" dataKey="x" height={50}>
                            <Label value="Time (s)" position="insideBottom" stroke="gray"/>
                        </XAxis>
                        <YAxis type="number" unit="ms" width={70} domain={[0, 100]} />
                        <Tooltip trigger="click" />
                        <Line
                            type="monotone"
                            dataKey="Ping"
                            stroke="#8884d8"
                            strokeWidth="2"
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        );
    }
};



export default DownContainer