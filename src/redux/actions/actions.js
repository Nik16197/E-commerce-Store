import ActionTYpes from "../constants/actionTypes";
import axios from "axios";

export const fetchAllProducts = ()=>{
    return async(dispatch)=>{
      try{
            const response = await axios.get("https://fakestoreapi.com/products");
            dispatch({type:ActionTYpes.FETCH_DATA,payload:response.data})
        }catch(err){
        console.log(new Error(err))
        }
    }
}

export const fetchSingleProduct = (productId)=>{
    return async(dispatch)=>{
        try{
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            dispatch({type:ActionTYpes.SELECT_PRODUCT,payload:response.data})
        }catch(err){
            console.log(new Error(err))
        }
    }
}

export const setProducts = (products) =>{
    return {
        type:ActionTYpes.SET_PRODUCTS,
        payload:products
    }
}

export const selectProduct = (product) =>{
    return{
        type:ActionTYpes.SELECT_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct = () =>{
    return{
        type:ActionTYpes.REMOVE_SELECTED_PRODUCT
    }
}
