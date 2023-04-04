import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import AddRestaunt from './Component/Restaunt/AddRestaunt';
import GetAllUserRestaunt from './Component/Restaunt/GetAllUserRestaunt'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/AddRestaunt" element={<AddRestaunt />} />
        <Route path = "/GetUserRestaunt" element ={<GetAllUserRestaunt/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
