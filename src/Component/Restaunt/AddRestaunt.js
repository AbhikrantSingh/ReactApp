import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterAction} from '../../store'
import axios from 'axios';import { Button, Form } from 'react-bootstrap';
import './AddRestaunt.css';

function AddRestaunt() {
    const [restauntName,setRestauntName] = useState('');
    const [email,SetEmail] = useState('');
    const [contact,setContact] = useState('');
    const userId = useSelector(state => state.loginUser.userId);
    const [checkAdd,setCheckAdd] = useState(false);
    const handleSubmit =() =>{
        console.log("USERID"+ userId);
        let restaunt ={
            "RestauntName" : restauntName,
            "Email" : email,
            "ContactNumber" : contact
        }
        const sanitizedUserId = userId.replace(/"/g, "");
        console.log("encodedUserId: " +sanitizedUserId);
        axios.post(`https://localhost:44397/restaunt/save/${sanitizedUserId}`, restaunt)
        .then(function (response) {
    console.log(response);
    setCheckAdd(true);
})
.catch(function (error) {
    console.log(error);
});

    }
  return (
      <>
    <div className="container" hidden={checkAdd}>
      <h1>Add Restaurant</h1>
      <Form  >
        <Form.Group controlId="Text">
          <Form.Label>Restaurant Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Restaurant Name"
            onChange={(e)=>{
                setRestauntName(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange= {(e)=>{
                SetEmail(e.target.value)
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Contact"
            onChange={(e)=>{
                setContact(e.target.value)
            }}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
            Save Restaunt
        </Button>
      </Form>
    </div>
    <div hidden ={!checkAdd}>
        <h1>ADDED Successfully</h1>
    </div>
 </>
  );
}

export default AddRestaunt;
