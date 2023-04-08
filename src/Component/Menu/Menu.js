import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterAction} from '../../store'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate   } from 'react-router-dom';

function Menu() {
    const dispatch = useDispatch();
    const restauntId = useSelector(state=>state.loginUser.restauntId);
    const navigate = useNavigate();

    const [dishName,setDishName] = useState();
    const [dishPrice,setDishPrice] = useState();
    const [isAvailable,setIsAvailable] = useState(false);
    const handleAddMenu =()=>{
        console.log("isAvailable"+isAvailable);
        let menu ={
            dishName:dishName,
            dishPrice : dishPrice,
            IsAvailable : isAvailable
        };
        console.log(menu);
      //  let id='ECC750F4-E7AB-45C3-7A0D-08DB36C72378';
        const sanitizedUserId = restauntId.replace(/"/g, "");
        console.log("encodedUserId: " +sanitizedUserId);
      
        axios.post(`https://localhost:44397/menu/${sanitizedUserId}`,menu)
        .then(function(response){
            console.log(response.data)
            navigate("/GetUserRestaunt");
          }) 
    }
  return (
      <>
    <div>
        <label>Dish Name</label>
        <input type ='text' 
        onChange={(e) =>{
            setDishName(e.target.value)
        }}
        />
        <br/>
        <label>Dish Price</label>
        <input type ='text' 
        onChange={(e) =>{
            setDishPrice(e.target.value);
        }}
        />
                <br/>

        <label>
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={() => handleBoolean(isAvailable, setIsAvailable)}
        />
        isAvailable
      </label>
      <br/>
        <button onClick={handleAddMenu}>AddMenu</button>
    </div>
    </>
  )
}
function handleBoolean(value, setValue) {
    setValue(!value);
  }
export default Menu