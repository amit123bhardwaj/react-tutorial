import * as actionType from '../action';
const initialState = {
    results:[]
}

const reducer = (state = initialState, action) => {
    switch(actionType){
    case actionType.STORE_RESULTS:
        return{
            ...state,
            results: state.results.concat({id: new Date(),value:action.result})
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