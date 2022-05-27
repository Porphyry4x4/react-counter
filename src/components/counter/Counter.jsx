import { render } from '@testing-library/react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component{
    constructor(props) {
        super(props);
        this.formatCount = this.formatCount.bind(this);
        this.renderTags = this.renderTags.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        
    }
    state = {
        value: this.props.value,
        tags: []
    }

    
    render() {
        let classes = this.getBadgeClasses();
        //every element rendered by map needs to have a key value in the unordered list

        return(
        <React.Fragment>
          <p className={classes}> {this.formatCount()}</p>
          <h6 className='badge badge-primary'>Counter #{this.props.id}</h6>
          <button className='btn btn-secondary btn-small'
                   onClick={this.handleIncrement}>Add</button>
           <button className='button.btn.btn-danger.btn-small.m-2'
                onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
          <ul>
              {this.renderTags()}
          </ul>
        </React.Fragment>
        ); 
    }
    //refactoring snippets
    //Helper functions
    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags</p>;
        } else {
            return this.state.tags.map(tag => {
                return <li key={tag}>{tag}</li>;
            });
        }
    }
    getBadgeClasses() {
        let classes = 'badge m-2 ';
        classes += (this.state.value === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatCount() {
        const {value: value} = this.state;
        return value === 0 ? 'zero' : value;
    }
    handleIncrement() {
        this.setState({value: this.state.value + 1});
    }
    

}

export default Counter;