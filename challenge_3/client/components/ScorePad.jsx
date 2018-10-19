import React from 'react';
import NumPad from 'react-numpad';

export default class ScorePad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: [],
            rounds: 0
        }
    
    }

    handleClick(valye) {
        alert('clicked and sved');
        console.log("value is", value)
        if (this.state.rounds === 3) {
            return this.state.score.reduce((sum, num) => {
                return sum += num;
            }, 0)
        } else if (this.state.rounds < 3) {
            this.state.score.push(val);
        }


    }
    
    render() {
        return (
            <NumPad.Number
            onChange={(value) => { 
                console.log('value', value)
            }}
            // onChange={this.handleClick(value)}
            // onClick = {this.handleClick}
            label={'Total'}
            // placeholder={'my placeholder'}
            // value='Insert Score Here'
            />
        )
    }
}
