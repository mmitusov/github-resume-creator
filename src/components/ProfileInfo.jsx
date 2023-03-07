import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const ProfileInfo = ({prop}) => {

  return (
    <Container className='ms-4'>
      <Row className="justify-content-md-center mt-3">
        <Col lg="3">
          <p className="text-start fs-2 fst-italic fw-bold">GitHub Profile</p>          
        </Col>
        <Col>
          <p className="text-start fs-4 fw-normal lh-base">
            On GitHub as an early adopter since {new Date(`${prop.created_at}`).getFullYear()}, {prop.name} is a developer 
            with {prop.public_repos} public repositories 
            and {prop.followers} followers.
          </p> 
        </Col>
      </Row>
      <hr className="dotted me-5"></hr> 
    </Container>
  )
}

export default ProfileInfo