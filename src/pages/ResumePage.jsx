import React from 'react'
import { Card, Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import Greeting from '../components/Greeting';
import Languages from '../components/Languages';
import Organizations from '../components/Organizations';
import ProfileInfo from '../components/ProfileInfo';
import Repositories from '../components/Repositories';
import Website from '../components/Website';

const ResumePage = () => {
  const location = useLocation();

  return (
    <Container>
      <Card className="text-center mt-5 mb-5">
        <Greeting prop={location.state}/>
        <ProfileInfo prop={location.state}/>
        <Website prop={location.state}/>
        <Languages prop={location.state}/>
        <Repositories prop={location.state}/>
        <Organizations prop={location.state}/>
      </Card>
    </Container>
  )
}

export default ResumePage