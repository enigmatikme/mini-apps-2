import React from 'react';
import ScorePad from './ScorePad';
import RollerBoard from './RollerBoard';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div> 
                <h1> Let's Play Little A Game</h1>
                <RollerBoard />
                <ScorePad />
            </div>

        )
    }
}