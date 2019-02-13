import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/action'
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>    
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onIncrementFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementFive}  />
                 <hr/>
                 <button onClick={this.props.onStoreResults(()=>this.props.ctr)}>Store Results </button>
                 <ul>
                     {this.props.stored_results.map((storedResult)=>{
                        <li key={storedResult.id} onClick={()=>this.props.onDeleteResults(storedResult.id)}>{storedResult.value}</li>
                     })}
                 </ul>    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        stored_results: state.res.results
    };
};

const mapDispatchToProps=dispatch=>{
    return{
        onIncrementCounter: ()=>dispatch({type:actionType.INCREMENT}),
        onDecrementCounter:()=>dispatch({type:actionType.DECREMENT}),
        onIncrementFive:()=>dispatch({type:actionType.INCREMENT5}),
        onDecrementFive:()=>dispatch({type: actionType.DECREMENT5}),
        onStoreResults:(result)=>dispatch({type:actionType.STORE_RESULTS,result:result}),
        onDeleteResults:(id)=>dispatch({type:actionType.DELETE_RESULTS,actionId:id}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);