import React from 'react';
import axios from 'axios';
import ChartData from './ChartData';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
    }

    componentDidMount() {
        axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-01-01&end=2018-01-27')
        .then(response => {
            this.setState({data: response.data});
        })
        .catch(error => {
            console.log('error in get request to API', error);
        });
    }


    render() {
        return (
            <div> 
            <h1> Hello Worldddd </h1>
            <ChartData data={this.state.data}/>
            </div>
        )
    }
}