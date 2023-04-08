import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterAction} from '../../store'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate   } from 'react-router-dom';


function GetAllRestauntMenu() {
    const [menuRestaunt,setMenuRestaunt] = useState([]);
    const restauntId = useSelector(state=>state.loginUser.restauntId);
    const navigate = useNavigate();

    const sanitizedUserId = restauntId.replace(/"/g, "");
    console.log("encodedUserId: " +sanitizedUserId);
    useEffect(()=>{
        axios.get(`https://localhost:44397/menu/restaunt/${sanitizedUserId}`)
        .then(function(response){
          console.log(response.data)
          setMenuRestaunt(response.data);

        })      
        },[]);
    return (
    <>
    <div>
    <Container>
      <h1>List of Menu</h1>
      <Row>
        {menuRestaunt.map((menu, index) => (
          <Col key={index} xs={12} md={4}>
            <Card className="custom-card">
              <Card.Body>
                <Card.Text>
                  DishName: {menu.dishName} <br />
                  DishPrice: {menu.dishPrice}<br />
                  Availablity: {menu.isAvailable}
                </Card.Text>
                <button onClick={()=>{
                 // dispatch(counterAction.setRestauntId(JSON.stringify(restaurant.id)));

                  navigate("/AddMenu")
                  
                }}>AddMenu</button>
                
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    </>
  )
}

export default GetAllRestauntMenu