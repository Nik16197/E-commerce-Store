import ActionTYpes from "../constants/actionTypes";

const productState = {
    products:[]
}

export const productReducer = (state=productState,action) =>{
    const {type,payload} = action;
    
    switch(type){
        case ActionTYpes.SET_PRODUCTS:
            return {...state,products:payload}
        case ActionTYpes.FETCH_DATA:
            return {...state,products:payload}
        default :
            return state
    }
}

export const singleProductReducer = (state={},action)=>{
    const {type,payload} = action;
   
    switch(type){
        case ActionTYpes.SELECT_PRODUCT:
            return {...state,...payload}
        case ActionTYpes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}
