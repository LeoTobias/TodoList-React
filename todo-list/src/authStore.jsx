import { makeAutoObservable } from 'mobx';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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

    async login(userData) {
        try {
            const res = await axios.get(`https://react-auth-db54a-default-rtdb.firebaseio.com/${userData.email}.json`, userData); //dados do email
            const user = Object.entries(res.data); //pega os dados
            if(user[1][1] === userData.password) { //verifica as credencciais
                this.isAuthenticated = true; //mandar os dados para o fire e verifica as credenciais
                navigate("/home"); //retorna o que foi encontrado
            } else {
                alert('Inválidos');
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export default new AuthStore();