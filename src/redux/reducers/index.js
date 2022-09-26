import {combineReducers} from "redux";
import { productReducer,singleProductReducer } from "./productReducer";

const reducer = combineReducers({
    allProducts:productReducer,
    singleProduct:singleProductReducer,
})

export default reducer