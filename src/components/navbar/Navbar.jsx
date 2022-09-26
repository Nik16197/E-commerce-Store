import React from 'react'
import "./index.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <Navbar style={{height:"12vh"}} bg="dark" expand="md">
      <Container>
      <Link to="/" style={{textDecoration:"none"}}>
      <Navbar.Brand style={{color:"white"}}>E-commerce Store</Navbar.Brand>
      </Link>
       
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Products"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" size="md">Search</Button>
          </Form>
      </Container>  
    </Navbar>
  )
}

export default NavComp
