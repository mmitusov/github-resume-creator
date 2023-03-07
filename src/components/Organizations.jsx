import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import OneOrganization from './OneOrganization';

const Organizations = ({prop}) => {
  const [organizations, setOrganizations] = useState([])
  const isEmpty = organizations.length ? true : false

  useEffect(() => {
    fetch(`https://api.github.com/users/${prop.login}/orgs`)
        .then(response => response.json())
        .then(data => {if (data) setOrganizations(data)});
  }, []);

  return (
    <Container className='ms-4'>
      <Row className="justify-content-md-center mt-3">
        <Col lg="3">
          <p className="text-start fs-2 fst-italic fw-bold">Organizations</p>          
        </Col>
        <Col className="text-start fs-4 fw-normal lh-base">          
          {isEmpty
            ? 
              organizations.slice(0, 5).map((org) => 
                <OneOrganization prop={org}/>
              )
            :
              <OneOrganization />
          }           
        </Col>
      </Row>
      <hr className="dotted me-5"></hr> 
    </Container>
  )
}

export default Organizations
