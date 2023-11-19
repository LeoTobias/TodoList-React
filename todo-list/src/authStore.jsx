import { makeAutoObservable } from 'mobx';
import axios from "axios";

class AuthStore {
    isAuthenticated = false;

    constructor() {
        makeAutoObservable(this);
    }

    async Register(userData) {
        try {
            const res = await axios.post(`https://fir-36bf1-default-rtdb.firebaseio.com/users/${userData.email}.json`, userData); //modificar a lógica
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async Login(userData) {
        try {
            const res = await axios.get(`https://fir-36bf1-default-rtdb.firebaseio.com/users/${userData.email}.json`, userData); //dados do email
            const user = Object.entries(res.data); //pega os dados

            if(user[0][1].password === userData.password) { //verifica as credencciais
                this.isAuthenticated = true; //mandar os dados para o fire e verifica as credenciais
                return user; //retorna o que foi encontrado
            } else {
                alert('Inválidos');
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export default new AuthStore();