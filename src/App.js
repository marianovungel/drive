import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screeens/Home/Home';
import Login from './Screeens/Login/Login';
import Pesquisa from './Screeens/Pesquisa/Pesquisa';
import { useContext } from 'react';
import {Context} from './Context/Context'


function App() {
  const {user} = useContext(Context);

  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={user ? <Home /> : <Login />} exact />
            <Route path="/login" element={user ? <Home /> : <Login /> } exact />
            <Route path="/pesquisa" element={user ? <Pesquisa /> : <Login /> } exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;