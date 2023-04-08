import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Menu from './Component/Menu/Menu';
import AddRestaunt from './Component/Restaunt/AddRestaunt';
import GetAllUserRestaunt from './Component/Restaunt/GetAllUserRestaunt';
import SignUpPage from './Component/SignUpPage';
import GetAllRestauntMenu from './Component/Menu/GetAllRestauntMenu';
import GetAllRestaunt from './Component/Customer/GetAllRestaunt';
import GetRestauntMenuCustomer from './Component/Customer/GetRestauntMenuCustomer';
import OrderData from './Component/Customer/OrderData';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/AddRestaunt" element={<AddRestaunt />} />
        <Route path = "/GetUserRestaunt" element ={<GetAllUserRestaunt/>}/>
        <Route path = "/SignUpPage" element ={<SignUpPage />}/>
        <Route path ="/AddMenu" element={<Menu />}/>  
        <Route path ="/GetAllRestauntMenu" element = {<GetAllRestauntMenu />}/>
        <Route path ="/GetAllRestaunt" element ={<GetAllRestaunt/>}/>
        <Route path= "/GetRestauntMenuCustomer" element ={<GetRestauntMenuCustomer/>}/>
        <Route path ="/OrderData" element ={<OrderData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
