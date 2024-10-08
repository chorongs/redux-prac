let initialState = {
    count:0
}



function reducer(state=initialState, action) {
    console.log("action", action)
    if(action.type === "INCREMENT") {
        return {...state, count:state.count+1}
    } else if (action.type === "DECREMENT") {
        return { ...state, count: state.count - 1 };
    } else if (action.type === "RESET") { 
        return initialState; 
    }

    
    return {...state}
}

export default reducer