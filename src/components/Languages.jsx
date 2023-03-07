import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Languages = ({prop}) => {
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${prop.login}/repos`)
        .then(response => response.json())
        .then(data => {if (data) setLanguages(data)});
  }, []);

  return (
    <Container className='ms-4'>
      <Row className="justify-content-md-center mt-3">
        <Col lg="3">
          <p className="text-start fs-2 fst-italic fw-bold">Languages</p>          
        </Col>
        <Col className="text-start fs-4 fw-normal lh-base">          
          {languages.map((i) => 
            <span> {`${i.language} `} </span>
          )}           
        </Col>
      </Row>
      <hr className="dotted me-5"></hr> 
    </Container>
  )
}

export default Languages