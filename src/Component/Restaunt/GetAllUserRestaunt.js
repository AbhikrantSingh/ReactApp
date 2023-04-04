import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterAction} from '../../store'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Card, Container, Row, Col } from 'react-bootstrap';

function GetAllUserRestaunt() {
  const [restaurants,setRestaurants] = useState([]);
  useEffect(()=>{
  axios.get(`https://localhost:44397/restaunt/AF62B573-0921-489A-13E2-08DB339E752A`)
  .then(function(response){
    console.log(response.data)
    setRestaurants(response.data);
  })      
  },[]);
  return (
    <div>
    <Container>
      <h1>List of Restaurants</h1>
      <Row>
        {restaurants.map((restaurant, index) => (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{restaurant.restauntName}</Card.Title>
                <Card.Text>
                  Email: {restaurant.email}<br />
                  Contact: {restaurant.contactNumber}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
    )
}

export default GetAllUserRestaunt