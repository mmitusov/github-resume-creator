import React from 'react'
import { Container, Row } from 'react-bootstrap';

const OneRepositorie = ({prop}) => {

  return (
    <Container>
      <Row>
          <p className="text-start fw-bold">{prop.name}</p>
          <p className="text-start fs-6 fw-normal lh-base">{prop.description}</p>
          <p className="text-start fs-6 fw-normal lh-base">
            This repository has {prop.stargazers_count} stars and {prop.forks_count} forks. 
            If you would like more information about this repository and my contributed code, please visit the repo on GitHub. 
          </p>          
      </Row>
      <hr className="dotted me-5"></hr> 
    </Container>
  )
}

export default OneRepositorie