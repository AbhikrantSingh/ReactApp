import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterAction} from '../../store'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './AddRestaunt.css'
import { useNavigate   } from 'react-router-dom';


function GetAllUserRestaunt() {
  const dispatch = useDispatch();
  const [restaurants,setRestaurants] = useState([]);
  const navigate = useNavigate();
  const userId = useSelector(state => state.loginUser.userId);
  const sanitizedUserId = userId.replace(/"/g, "");
  console.log("encodedUserId: " +sanitizedUserId);

  useEffect(()=>{
  axios.get(`https://localhost:44397/restaunt/${sanitizedUserId}`)
  .then(function(response){
    console.log(response.data)
    setRestaurants(response.data);
  })      
  },[]);

  const handleAddMore = () =>{
    navigate("/AddRestaunt");
  }
  return (
    <div>
    <Container>
      <Row>
        <Col>
          <button onClick={handleAddMore}>AddMore</button>
        </Col>
      </Row>
    </Container>
    <Container>
      <h1>List of Restaurants</h1>
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
                  dispatch(counterAction.setRestauntId(JSON.stringify(restaurant.id)));

                  navigate("/AddMenu")
                  
                }}>AddMenu</button>
                <button onClick={()=>{
                //  dispatch(counterAction.setRestauntId(JSON.stringify(restaurant.id)));
               // dispatch(counterAction.setmenuRestauntId(JSON.stringify(restaurant.id)));
                dispatch(counterAction.setRestauntId(JSON.stringify(restaurant.id)));

                  navigate("/GetAllRestauntMenu")
                  
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

export default GetAllUserRestaunt