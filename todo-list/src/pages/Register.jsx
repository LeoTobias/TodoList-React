import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "./Layout";



export const Register = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const getSubmit = async () => {
        try {
            await authStore.register(userData);
            setUserData({email: '', password: ''});
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
            type="name"
            value={userData.name}
            onChange={(e) => setUserData({...userData, name: e.target.value})}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
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
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}

export default Register;