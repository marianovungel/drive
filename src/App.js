import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screeens/Home/Home';
import Login from './Screeens/Login/Login';
import Pesquisa from './Screeens/Pesquisa/Pesquisa';
import { useContext } from 'react';
import {Context} from './Context/Context'
import Form from './Screeens/Form/Form';
import Acompanhar from './Screeens/Acompanhar/Acompanhar';
import Gerenciar from './Adm/Screens/Gerenciar/Gerenciar';
import HomeAdm from './Adm/Screens/HomeAdm/HomeAdm';
import SolicitarAdm from './Adm/Screens/Solicitações/SolicitarAdm';
import SingleSol from './Adm/Screens/SingleSol/SingleSol';


function App() {
  const {user} = useContext(Context);

  return (
    <div className="App">
      <Router>
          <Routes> 
            <Route path="/" element={user ? <Home /> : <Login />} exact />
            <Route path="/login" element={user ? <Home /> : <Login /> } exact />
            <Route path="/pesquisa" element={user ? <Pesquisa /> : <Login /> } exact />
            <Route path="/form/:id" element={user ? <Form /> : <Login /> } exact />
            <Route path="/acompanhar" element={user ? <Acompanhar /> : <Login /> } exact />
            <Route path="/gerenciar" element={user ? <Gerenciar /> : <Login /> } exact />
            <Route path="/homeadm" element={user ? <HomeAdm /> : <Login /> } exact />
            <Route path="/solicitacoes" element={user ? <SolicitarAdm /> : <Login /> } exact />
            <Route path="/form_preenchido/:id" element={user ? <SingleSol /> : <Login /> } exact />
          </Routes>
        </Router>
    </div>
  );
}

export default App;