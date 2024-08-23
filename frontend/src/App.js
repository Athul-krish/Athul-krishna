import { Route, Routes } from 'react-router-dom';
import '../src/App.css';
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Home from './Components/Home';

function App() {
  return (
    <div className="body">
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
