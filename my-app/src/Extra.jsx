import React from 'react'
import lamp18 from "./assets/asset 18.webp";
import lamp19 from "./assets/asset 19.webp";
import { Card, Container,Row,Col } from "react-bootstrap"
import { Link } from 'react-router-dom';



const Extra = () => {
  return (
    <>
          <Container fluid style={{ width:"90%"}} >
            <Row>
              <Col md={6} className="extra_section">
              <Link to='/'>
                 <Card >
                    <Card.Img src={lamp18}/>
                    <Card.Body>
                        <Card.Title><h3 style={{color:'black',fontFamily:"sans-serif",fontSize:"1.6rem"}}>Floor Table Lamps</h3></Card.Title>
                    </Card.Body>  
                 </Card>
                 </Link>
              </Col>
              <Col md={6} className="extra_section">
              <Link to='/'>
                 <Card >
                    <Card.Img src={lamp19} className="card-image"/>
                    <Card.Body>
                        <Card.Title><h3 style={{color:'black', fontFamily:"sans-serif",fontSize:"1.6rem"}}>Wall Lights</h3></Card.Title>
                    </Card.Body>  
                 </Card>
                 </Link>
              </Col>
            </Row>
          </Container> 
      
    

    </>
  )
}

export default Extra
