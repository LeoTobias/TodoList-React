import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "./Layout";
import authStore from "../authStore";


import "../assets/Register.css";


export const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
          email: '',
          password: ''
    });

    const getSubmit = async (e) => {
      e.preventDefault();
      try {
        await authStore.register(userData);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <LayoutComponents >
      <form className="login-form">
        <span className="login-form-title"> Criar Conta </span>

        <div className="wrap-input">
          <input
            className={userData.email !== "" ? "has-val input" : "input"}
            type="text"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>
        <div className="wrap-input">
          <input
            className={userData.password !== "" ? "has-val input" : "input"}
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn" type="submit" onClick={getSubmit}>Cadastrar</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/">
            Acessar com Email e Senha.
          </Link>
        </div>  
      </form>
    </LayoutComponents>
  )
}

export default Register;