import React from 'react'
import Card from 'react-bootstrap/Card';
import {useSelector} from "react-redux";
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link,useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useSelector((state)=>state.allProducts.products)
  
  return (
      products.map(product=>{
        
        const {id,description,image,title} = product;
  
  return <Col key={id}>
          <CardGroup>
            <Card style={{ width: '20rem',height:"40rem",margin:"0.1rem" }}>
            <Link to={`/product/${id}`}>
              <Card.Img style={{height:"20rem",width:"15rem"}} src={image} />
              </Link>
                <Card.Body>
                 <Card.Title>{title}</Card.Title>
                 <Card.Text >{description}</Card.Text>
                </Card.Body>
            </Card>
          </CardGroup>
        </Col>
       
      })
    
   

  )
}

export default ProductDetails
