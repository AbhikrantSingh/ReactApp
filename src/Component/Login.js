import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {counterAction} from '../store'
import axios from 'axios';
import { useNavigate   } from 'react-router-dom';
import AddRestaunt from './Restaunt/AddRestaunt';

function Login() {
    const dispatch = useDispatch();
    const [check,setCheck]=useState(false);// false;
    const userEmail = useSelector(state=>state.loginUser.Email);
    const userPassword = useSelector(state=>state.loginUser.Password);
    const [user,setUser]=useState({}); 
    const navigate = useNavigate();

    const [error,setError]= useState(false);
    const loginUser= ()=>{
        console.log("LOGIN")
        console.log(userEmail);
        console.log(userPassword);
        console.log("------------------------------------")
        axios.post('https://localhost:44397/home/login?email=' + userEmail + '&password=' + userPassword)
        //   axios.get('https://localhost:44397/home/user')
        .then(res=>{
            console.log(JSON.stringify(res.data.userId)+"@@@@@")
            console.log(JSON.stringify(res.data,null,2)+"@@@@@")
            
            setCheck(true);
            //<Navigate  to="/AddRestaurant" />;
            dispatch(counterAction.setUserId(JSON.stringify(res.data.userId)));
            setUser(res.data);

            if(JSON.stringify(res.data.userType)==0)
            {
                navigate("/GetAllRestaunt");
            }
            else
            {
                navigate("/GetUserRestaunt");
            }
            
          
            
        })
        .catch(err=>{
            setError(true);
        })
}
const logOut =()=>{
    setCheck(false);
}
  return (
    <div>

    
        <div hidden={check}>
        <label>Email</label>
        <input type ='text' 
        onChange={(e) =>{
            dispatch(counterAction.setEmail(e.target.value))
        }}
        />
        <br></br>
        <label>Password</label>
        <input type ='text'
        onChange={(e) =>{
            dispatch(counterAction.setPassword(e.target.value))
        }}
        />
        <br></br>
        <button onClick={loginUser}>Login</button>
        </div>
        <div hidden={!check}>
            
            <div>
                <button onClick={logOut}>Logout</button>
            </div>

        </div>
        <div hidden={error}>
            <h1>Pls Enter correct Id and Password</h1>
        </div>
    </div>
  )
}

export default Login;
