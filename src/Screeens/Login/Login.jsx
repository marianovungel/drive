import React, { useContext, useRef } from 'react'
import './Login.css'
import Header from '../../Components/Header/Header'
import apiSig from '../../apiSig'
import {Context} from '../../Context/Context'

export default function Login() {
    const { dispatch } = useContext(Context)
    const userRef = useRef();
    const passwordRef = useRef();

    const Submit = async (e)=>{
      e.preventDefault();
      dispatch({ type: "LOGIN_START"})
      console.log([userRef.current.value, passwordRef.current.value])
      try {
          const {data} = await apiSig.post("/authenticate", {
            login: userRef.current.value,
            senha: passwordRef.current.value
          })

          const sigData = await apiSig.get("/bond", {
            headers: {authorization: data.access_token}
          })
          console.log(sigData.data[0])
          dispatch({ type: "LOGIN_SUCCESS", payload: sigData.data[0]})
            window.location.replace("/");
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE"})
      }
    }
  return (
    <div className='Login'>
      <Header />
      <div className="FormLogin">
        <form className="FormContent" onSubmit={Submit}>
            <div className="TitleLoginForm">Login</div>
            <input type="text" className="user" ref={userRef} placeholder='Usuário-Sigaa' />
            <input type="password" className="user" ref={passwordRef} placeholder='Palavra passe' />
            <div className="esqueci">Lembrar-me</div>
            <button className='paddinBuutt' value="Send" type="submit">
                Entrar <i className="fa-solid fa-right-to-bracket"></i>
            </button>
        </form>
      </div>
    </div>
  )
}
