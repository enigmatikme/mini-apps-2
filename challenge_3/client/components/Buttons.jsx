import React from 'react';
import Button from './Button';

// export default class RollerBoard extends React.Component {
    const Buttons = (props) =>  {
        return (<div className="rolls">
          <Button number={0} click={props.click}/>
          <Button number={1} click={props.click}/>
          <Button number={2} click={props.click}/>
          <Button number={3} click={props.click}/>
          <Button number={4} click={props.click}/>
          <Button number={5} click={props.click}/>
          <Button number={6} click={props.click}/>
          <Button number={7} click={props.click}/>
          <Button number={8} click={props.click}/>
          <Button number={9} click={props.click}/>
          <Button number={10} click={props.click}/>
        </div>);
      };
// }

export default Buttons;