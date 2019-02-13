import * as actionType from './action';
const initialState = {
    counter: 0,
    results:[]
}

const reducer = (state = initialState, action) => {
    switch(actionType){
    case actionType.INCREMENT: 
        const newState=Object.assign({},state)
            newState.counter= state.counter + 1
        return newState
    case actionType.DECREMENT:
        return{
            ...state,
            counter: state.counter - 1   
        }
    case actionType.INCREMENT5:
        return{
            ...state,
            counter: state.counter + 5
        }
    case actionType.DECREMENT5:
        return{
            ...state,
            counter: state.counter - 5
        }
    case actionType.STORE_RESULTS:
        return{
            ...state,
            results: state.results.concat({id: new Date(),value:state.counter})
        }
    case actionType.DELETE_RESULTS:
    const updatedArray=state.results.filter((res)=>res.id!==action.actionId)
        return{
            ...state,
            results:updatedArray
        }
    default:
    return state;
}
}

export default reducer;