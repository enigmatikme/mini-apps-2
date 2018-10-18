import React from 'react';
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Events from './Events.jsx';

export default class App extends React.Component {
    constructor() {
        super();
        this.state ={
            query: '',
            data: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handleSubmit(event, page) {
        event.preventDefault();
        axios.get(`/events?_page=1&q=${this.state.query}`)
        .then(response => {
            console.log(response);
            this.setState({data: response.data})
        })
        .catch(error => {
            console.log('error in get request', error);
        });
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    handlePageClick (data) {
        let selected = data.selected + 1;
    
        axios.get(`/events?_page=${selected}&q=${this.state.query}`)
        .then(response => {
            console.log(response);
            this.setState({data: response.data})
        })
        .catch(error => {
            console.log('error in get request', error);
        });
      };

    render() {
        return (
            <div>
            <div> History </div> 
            <form onSubmit={this.handleSubmit}>
            <label>
            Search:
            <input type="text" name="name" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
            </form>
            <div>
            <Events data={this.state.data}/>
            </div>
            <div>
            <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} 
                       onClick={this.handleClick}/>
            </div>
      </div>
            
        )
    }
}
