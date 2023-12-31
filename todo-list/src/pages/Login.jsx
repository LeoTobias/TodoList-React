import { useState } from "react";
import authStore from "../authStore";
import { useNavigate, Link } from "react-router-dom";


import "../assets/Login.css";

function Login() {
    const [ loginData, setLoginData ] = useState({ email: '', password: ''});
    const navigate = useNavigate();

    const getLogin = async (e) => {
      e.preventDefault();
        try {
            await authStore.login(loginData, navigate);
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={getLogin}>
            <span className="login-form-title"> Bem vindo </span><br /><br />
            <div className="wrap-input">
              <input
                className={loginData.email !== "" ? "has-val input" : "input"}
                type="text"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={loginData.password !== "" ? "has-val input" : "input"}
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" type='submit'>Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <Link className="txt2" to="/register">
                Criar conta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;