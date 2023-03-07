import React from 'react'
import { Container } from 'react-bootstrap';

const Greeting = ({prop}) => {

  return (
    <Container>
        <h1 className="text-start ms-4 mt-3">{prop.name}</h1>
        <p className="text-start ms-4 fs-4 fw-normal lh-base">PASSIONATE GITHUB USER</p>
        <hr className="dotted"></hr> 
    </Container>
  )
}

export default Greeting