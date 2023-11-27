import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screeens/Home/Home';
import Login from './Screeens/Login/Login';
// import { useContext } from 'react';
// import {Context} from './Context/Context'


function App() {
  // const {user} = useContext(Context);

  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={<Home /> } exact />
            <Route path="/login" element={<Login /> } exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;