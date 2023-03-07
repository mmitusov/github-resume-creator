import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Website = ({prop}) => {
  let blog = prop.blog.length ? prop.blog : `${prop.name} don't have personal websiter for now`

  return (
    <Container className='ms-4'>
      <Row className="justify-content-md-center mt-3">
        <Col lg="3">
          <p className="text-start fs-2 fst-italic fw-bold">Website</p>          
        </Col>
        <Col>
          <p className="text-start fs-4 fw-normal lh-base">
            {blog} 
          </p> 
        </Col>
      </Row>
      <hr className="dotted me-5"></hr> 
    </Container>
  )
}

export default Website