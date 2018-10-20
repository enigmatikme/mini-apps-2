import React from 'react';
import ScorePad from './ScorePad';
import Buttons from './Buttons';
import ScoreCard from './ScoreCard';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
            score: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    pinHit(value) {
        var matrices= [
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]
        ];
       

       if (value === 10) {
           var placeholder = 10;
           var framePlace;
        for (let i = 0; i < matrices.length; i++) {
            
        }
       }
    }

    handleClick(value) {
        console.log(value)
        this.pinHit(value)
    }

    
    render() {
        return (
            <div> 
            <h1> Let's Play Little A Game</h1>
            <Buttons click={this.handleClick}/>
            <ScorePad />
            <ScoreCard />
            </div>
            
        )
    }
}
