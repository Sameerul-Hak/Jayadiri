
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';


function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route initial path="/"element={<Login/>}/>        
          <Route initial path="/home"element={<Home/>}/>        
          <Route initial path="/events"element={<Events/>}/>        
          <Route  path="/register"element={<Register/>}/>                  
        </Routes>
      </Router>
    </>
  )
}

export default App
