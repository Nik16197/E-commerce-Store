import React,{useEffect} from 'react'
import ProductDetails from '../products/Product'
import Row from 'react-bootstrap/Row';
import "./index.css";
import {useSelector,useDispatch} from "react-redux";
import axios from "axios"
import {setProducts,fetchAllProducts} from "../../redux/actions/actions"

const ProductListing = () => {
  
  const products = useSelector((state)=>state.allProducts.products)
  const dispatch = useDispatch()  

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  return (
    <div className='listing'>
       <Row md={4} className="g-4">
          <ProductDetails />
      </Row>
     </div>
  )
}

export default ProductListing
