import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import OneRepositorie from './OneRepositorie';

const Repositories = ({prop}) => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${prop.login}/repos`)
        .then(response => response.json())
        .then(data => {if (data) setRepositories(data)});
  }, []);
 

  return (
    <Container className='ms-4'>
      <Row className="justify-content-md-center mt-3">
        <Col lg="3">
          <p className="text-start fs-2 fst-italic fw-bold">Repositories</p>          
        </Col>
        <Col className="text-start fs-4 fw-normal lh-base">          
          {repositories.slice(0, 5).map((repo) => //Get first 5 repos
            <OneRepositorie prop={repo}/>
          )}           
        </Col>
      </Row>
      <hr className="dotted me-5"></hr> 
    </Container>
  )
}

export default Repositories
