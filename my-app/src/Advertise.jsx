import React from 'react'
import { Col,Container,Row} from 'react-bootstrap'
import Advertisement from "../src/assets/asset 35.jpeg"

const Advertise = () => {
  return (
    <>
        <Container>
            <Row>
                <Col md={12}>
                   <div className="advertise-image">
                   <img src={Advertisement} alt="advertise-image" />
                   </div>
                </Col>
            </Row>
        </Container> 
    </>
  )
}

export default Advertise
