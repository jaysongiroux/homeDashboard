import React from 'react';
import {ResponsiveContainer,LineChart,Line,XAxis,Tooltip,CartesianGrid,Legend,Label,YAxis} from 'recharts'
import apiLocation from './../assets/apiLocations'

class CPUPlot extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentload: null,
            data: [],
            counter: 0,
            animate:true
        };

        this.listenerInterval = 5000; //normally 5 seconds
        this.callAPI = this.callAPI.bind(this);
        this.apiLocations = new apiLocation();

        this.handleApiResponse = this.handleApiResponse.bind(this);
    }

    componentDidMount() {
        this.callAPI();
    }

    callAPI() {
        setInterval(() => {
            fetch(this.apiLocations.currentLoadPlot())
                .then(res => res.json())
                .then(res => this.handleApiResponse(res))
        },this.listenerInterval)
    }

    handleApiResponse(info){
        this.setState({data:info})
    }

    render(){
        return (
            <div className="plot col s12 m6">
                <h5 className="grey-text">Cpu Usage</h5>
                <ResponsiveContainer width='100%' aspect={4.0/2.0}>
                    <LineChart className="grey-text" data={this.state.data} syncId="currentload" is>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Legend
                            onMouseEnter={this.handleLegendMouseEnter}
                            onMouseLeave={this.handleLegendMouseLeave}
                        />
                        <XAxis type="number" dataKey="x" height={50}>
                            <Label value="Time (s)" position="insideBottom" stroke="gray"/>
                        </XAxis>
                        <YAxis type="number" unit="%" width={70} domain={[0, 100]} />
                        <Tooltip trigger="click" />
                        <Line
                            type="monotone"
                            dataKey="currentload"
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



export default CPUPlot