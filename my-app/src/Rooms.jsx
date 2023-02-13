import React from 'react'
import room1 from "../src/assets/asset 28.jpeg";
import room2 from "../src/assets/asset 29.jpeg";
import room3 from "../src/assets/asset 30.jpeg";
import { Card, Container,Row,Col } from "react-bootstrap"
import { Link } from 'react-router-dom';


const Rooms = () => {
  return (
    <>
            <Container fluid style={{ width:"90%" }} className="rooms_section">
            <Row>
              <Col md={4}>
              <Link to='/'>
                 <Card  >
                    <Card.Img src={room1}/>
                    <Card.Body>
                        <Card.Title><h1 style={{color:'black'}} className="Heading">Living Room</h1></Card.Title>
                    </Card.Body>  
                 </Card>
                 </Link>
              </Col>
              <Col md={4}>
              <Link to='/'>
                 <Card style={{ width:"100%" }}>
                    <Card.Img src={room2} className="card-image"/>
                    <Card.Body>
                    <Card.Title><h1 style={{color:'black'}} className="Heading">Dining Room</h1></Card.Title>
                    </Card.Body>  
                 </Card>
                 </Link>
              </Col>
              <Col md={4}>
              <Link to='/'>
                 <Card style={{ width:"100%" }}>
                    <Card.Img src={room3} className="card-image"/>
                    <Card.Body>
                    <Card.Title><h1 style={{color:'black'}} className="Heading">Kitchen Hall</h1></Card.Title>
                    </Card.Body>  
                 </Card>
                 </Link>
              </Col>
            </Row>
          </Container> 
      
    </>
  )
}

export default Rooms
