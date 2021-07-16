import React from "react";
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

// import logo from "../../public/imageFolder/logo.png";
import './login.css'


// class logo extends componenet{}  


const api = axios.create({
    baseURL:`http://localhost:3001/`
  })
  

const Login = () =>{
    const [email, setEmail] = React.useState("")
    const [passwd, setPasswd] = React.useState("")
    const history = useHistory()

    const emailChangeHandler = (event) =>{
        setEmail(event.target.value)
    }

    const passwdChangeHandler = (event) =>{
        setPasswd(event.target.value)
    }

    const onLoginHandler = (event) =>{
        event.preventDefault() 
        api.post("auth",{
            email:email,
            password:passwd,
        }).then(res=>{
            if(Object.entries(res.data).length !== 0){
                history.push("/home/todos/"+res.data.id)
            }
        })
    }

    return (
        <section className = "LoginSection">
            <h1>Login</h1>    
            <div className ="loginLogImg">
                <img src="imageFolder/logo.png" alt="" width="235" height="75"/>
            </div>

            <div className="login">
                <form>
                    <p>Usuário</p>
                    <input type="text" value={email} onChange={emailChangeHandler} placeholder="Insira seu nome de usuário" />
                    <p>Senha</p>
                    <input type="password" value={passwd} onChange={passwdChangeHandler}  placeholder="Insira sua senha" />
                    <input type="submit" name="" value="Login" onClick={onLoginHandler}/>
                </form>
            </div>
        </section>
    )
}

export default Login;