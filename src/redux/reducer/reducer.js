let initialState = {
    count:0
}



function reducer(state=initialState, action) {
    console.log("action", action)
    if(action.type === "INCREMENT") {
        return {...state, count:state.count+1}
    } 
    
    return {...state}
}

export default reducer