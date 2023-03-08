import React from 'react'
import { Container, Row } from 'react-bootstrap';

const OneOrganization = ({prop}) => {
    const isNotEmpty = prop ? true : false

  return (
    <Container>
        {isNotEmpty ?
            <Row>
                <p className="text-start fw-bold">{prop.login}</p>   
                <p className="text-start fs-6 fw-normal lh-base">If you would like more information about this organization, please visit the organization page on GitHub.</p>  
            </Row>
        :
            <Row>
                    <p className="text-start fs-6 fw-normal lh-base">No organisations</p>   
            </Row>
        }
    </Container>
  )
}

export default OneOrganization