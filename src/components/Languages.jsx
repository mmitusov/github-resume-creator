import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Languages = ({prop}) => {
  const [languages, setLanguages] = useState({})
  const [sum, setSum] = useState(0)
  useEffect(() => {
    (async () => {
      try {
        let langObj = {};
        let sumValues;
        const response = await fetch(`https://api.github.com/users/${prop.login}/repos`);
        const data = await response.json();
        for (let user of data) if (user.language !== null) {langObj[user.language] = langObj[user.language]+1 || 1};
        sumValues = Object.values(langObj).reduce((acc, curr) => acc + curr, 0)
        setLanguages(langObj)
        setSum(sumValues)
      } catch(err) {
        console.log(err)
      }
    })()
  }, []);

  return (
    <Container className='ms-4'>
      <Row className="justify-content-md-center mt-3">
        <Col lg="3">
          <p className="text-start fs-2 fst-italic fw-bold">Languages</p>          
        </Col>
        <Col className="text-start fs-4 fw-normal lh-base">          
          {
            Object.entries(languages).map(([key,value],i) => <span key={i}>{`${key} (${(value/sum*100).toFixed(2)}%) `}</span>)
          }           
        </Col>
      </Row>
      <hr className="dotted me-5"></hr> 
    </Container>
  )
}

export default Languages