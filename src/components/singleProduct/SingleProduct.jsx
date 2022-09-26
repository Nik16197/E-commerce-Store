import React,{useEffect} from 'react'
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { selectProduct,removeSelectedProduct,fetchSingleProduct } from '../../redux/actions/actions';

const SingleProduct = () => {
    const {productId} = useParams()
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.singleProduct);
    const {category,description,id,image,title,price} = singleProduct;

    useEffect(()=>{
        productId && dispatch(fetchSingleProduct(productId));
        return ()=>{
          dispatch(removeSelectedProduct())
        }
    },[productId])

  return (
    Object.keys(singleProduct).length === 0 ?(<div>Loading......</div>):(

        <Row xs={1} md={2}>
        <Col>
          <Card> 
            <Card.Body>
            <Figure>
                <Figure.Image
                    width={350}
                    height={150}
                    
                    src={image}
                />
            </Figure>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{marginTop:"5rem"}}>
          {/* <Card style={{ width: '35rem' }}> */}
            <Card.Body>
              <Card.Title>
                <h1>{title}</h1>
                </Card.Title>
              <Card.Text>
               <Badge bg="secondary" style={{padding:"1rem"}}>${price}</Badge>
              </Card.Text>
              <Card.Text>
               {description}
              </Card.Text>
              <Button variant="danger" size="lg">
                Add To Cart
              </Button>
            </Card.Body>
          {/* </Card> */}
        </Col>
     
        </Row>
        )
  )
}

export default SingleProduct
