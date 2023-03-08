import React, { useState } from 'react'
import { KEY_CODE, NOT_FOUND_ROUTE, RESUME_ROUTE } from '../utils/consts'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const StartPage = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleFetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      const data = await response.json();
      data.message === "Not Found" ? navigate(NOT_FOUND_ROUTE) : navigate(RESUME_ROUTE, {state: data}) 
    } catch(err) {
      console.log(err)
    }
  }
  const handleKeypress = e => {
    if (e.keyCode === KEY_CODE) handleFetchData(); 
  };

  return (
    <Container>
      <Card className="text-center mt-5 mb-5">
        <Card.Header><h1>Create your GitHub resume!</h1></Card.Header>
        <Card.Body>
          <Card.Title>Auto-generate your GitHub profile overview</Card.Title>
          <Card.Text>
            Just type below name of your GitHub profile and submit it!
          </Card.Text>    
            <Row className="justify-content-md-center">
              <Col xs="auto" lg="3">
                <Form.Control
                  placeholder='Enter your GitHub username'
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeypress}
                /> 
              </Col>
              <Col xs="auto">
                <Button variant="primary" onClick={handleFetchData}>Generate</Button>
              </Col>
            </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default StartPage;