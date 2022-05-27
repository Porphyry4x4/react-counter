import React, { Component } from 'react';
import Counter from '../counter/Counter.jsx';

class Counters extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        counters: [{ id: 1, value: 7 },
                   { id: 2, value: 0 },
                   { id: 3, value: 0 },
                   { id: 4, value: 0 },
                   { id: 5, value: 0 }
                ],
        tags: ['tag1', 'tag2', 'tag3']

    };
    render() {
        console.log(this.props);
        return(
            <div>
                <button 
                onClick={this.handleReset}
                className='btn btn-primary btn-small m-2'>Reset</button><br/>
                {this.state.counters.map(counter => (
                     <Counter key={counter.id} 
                      value={counter.value}
                      id={counter.id}
                      onDelete={this.handleDelete} 
                      counter={counter}
                      onIncrement={this.handleIncrement}
                      tags={this.state.tags}/>
                ))}
             
            </div>
        )
    }
    //Helper Functions
    handleDelete = counterId => {
        //creating an array with the counter with the id passed as an argument
        const counters = this.state.counters.filter(c => c.id !== counterId );
        //setting the state by overriding the counters array with the filtered array stored in conters
        this.setState({counters: counters});
    }              
    handleReset = () => {
       const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
        this.setState({counters: counters});
       }

       handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters})

    }
   

}

export default Counters;