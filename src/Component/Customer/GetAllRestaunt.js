import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterAction} from '../../store'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate   } from 'react-router-dom';

function GetAllRestaunt() {
    const [restaurants,setRestaurants] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
useEffect(()=>{
axios.get(`https://localhost:44397/restaunt`)
.then(function(response){
    setRestaurants(response.data);
})
},[])
  return (
    <div>
        <Container>
      <h1>List of Restaurants in your City</h1>
      <Row>
        {restaurants.map((restaurant, index) => (
          <Col key={index} xs={12} md={4}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Title>{restaurant.restauntName}</Card.Title>
                <Card.Text>
                  Email: {restaurant.email}<br />
                  Contact: {restaurant.contactNumber}
                </Card.Text>
                <button onClick={()=>{
                //  dispatch(counterAction.setRestauntId(JSON.stringify(restaurant.id)));
               // dispatch(counterAction.setmenuRestauntId(JSON.stringify(restaurant.id)));
                dispatch(counterAction.setRestauntId(JSON.stringify(restaurant.id)));

                  navigate("/GetRestauntMenuCustomer")
                  
                }}>MenuDetails</button>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default GetAllRestaunt