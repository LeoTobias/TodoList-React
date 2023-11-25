import { makeAutoObservable } from 'mobx';
import axios from "axios";
import { useNavigate } from "react-router-dom";

class AuthStore {
    isAuthenticated = false;

    constructor() {
        makeAutoObservable(this);
    }

    async register(userData) {
        try {
            const res = await axios.put(`https://react-auth-db54a-default-rtdb.firebaseio.com/${userData.email}.json`, userData); //modificar a lógica
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async login(userData, navigate) {
        try {

            if (!userData.email || !userData.password) {
                alert('Por favor, forneça um email e senha válidos');
                return;
            }

            const res = await axios.get(`https://react-auth-db54a-default-rtdb.firebaseio.com/${userData.email}.json`, userData);
    
            if (res.data) {
                const user = Object.entries(res.data);
    
                if (user[1] && user[1][1] === userData.password) {
                    this.isAuthenticated = true;
                    navigate('/Home');
                } else {
                    alert('Credenciais inválidas');
                }
            } else {
                alert('Usuário não encontrado');
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export default new AuthStore();