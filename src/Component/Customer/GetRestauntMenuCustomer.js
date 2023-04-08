import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {orderAction} from '../../store'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate   } from 'react-router-dom';
import './GetRestauntMenuCustomer.css'


function GetRestauntMenuCustomer() {
    const [menuRestaunt,setMenuRestaunt] = useState([]);
    const restauntId = useSelector(state=>state.loginUser.restauntId);
    const navigate = useNavigate();
    const [count,setCount] = useState(0);
    const [total,setTotal] = useState(0);
    const orderD = useSelector(state => state.orderD.total);
    const dispatch = useDispatch();

    const sanitizedId = restauntId.replace(/"/g, "");
    console.log("encodedUserId: " +sanitizedId);
    useEffect(()=>{
        axios.get(`https://localhost:44397/menu/restaunt/${sanitizedId}`)
        .then(function(response){
          console.log(response.data)
          setMenuRestaunt(response.data);
          
        })      
        },[count]);
        const handleIncrement = () => {
          setCount(count + 1);
         // setTotal(menu.dishPrice * (count));
          console.log("Count: " + count);
          console.log("Total: " + total);
        };
      
        const handleDecrement = () => {
          if (count > 0) {
            setCount(count - 1);
        //    setTotal(menu.dishPrice * (count));
            console.log("Count: " + count);
            console.log("Total: " + total);
          }
        };
  return (
    <>
    <div>
    <Container>
  <h1>List of Menu</h1>
  <Row>
    {menuRestaunt.map((menu, index) => (
      <Col key={index} xs={12} md={4}>
        <Card className="custom-card"  >
          <Card.Body>
            <div className="menu-item">
              <div className="menu-details" style={{backgroundColor: '#008080'}}>
                <span>DishName: {menu.dishName}</span><br/>
                <span>DishPrice: {menu.dishPrice}</span><br/>
                <span>Availablity: {menu.isAvailable}</span><br/>
              </div>
              <div className="menu-buttons">
              <button onClick={()=>{
                let c = count;
                c=c+1;
                setCount(c);
                setTotal(menu.dishPrice*c)
                dispatch(orderAction.setTotal(menu.dishPrice*c));
                dispatch(orderAction.setMenuId(menu.id))  
              }}>+</button>
              <span>{count}</span>
              <button onClick={()=>{
                let c = count;
                c=c-1;
                setCount(c);
                setTotal(menu.dishPrice*c)
                dispatch(orderAction.setTotal(menu.dishPrice*c));
                dispatch(orderAction.setRestauntId(sanitizedId));
              }}>-</button>
              <p>Total: {total}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
<Container>
  <button className="primary" onClick={()=>{
    navigate("/OrderData")
}}>PlaceOrder</button>
</Container>
 </div>
    </>
  )
}

export default GetRestauntMenuCustomer