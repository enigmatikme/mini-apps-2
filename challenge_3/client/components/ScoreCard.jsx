import React from 'react';
import styles from './ScoreCard.styles.css';

export default class ScoreCard extends React.Component {
        constructor(props){
          super(props);
          this.state = {size: 10}
        }
        render(){
          let rows = [];
          for (var i = 0; i < this.state.size; i++){
            let rowID = `row${i}`
            let cell = []
            for (var i = 0; i < this.state.size; i++){
              let cellID = `cell${i}-${i}`
              cell.push(<td key={cellID} id={cellID} className={styles.row}> row </td>)
            }
            rows.push(<tr key={i} id={rowID}>{cell}</tr>)
          }
          return(
            <div className="container">
              <div className="row">
                <div className="col s12 board">
                  <table id="simple-board">
                     <tbody>
                       {rows} Hello
                     </tbody>
                   </table>
                </div>
              </div>
            </div>
          )
        }
      }
