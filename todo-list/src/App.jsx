import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { observer } from "mobx-react-lite";

import Todo from "./components/Todo";
import Search from "./components/Search";
import Filter from "./components/Filter";
import TodoForm from "./components/TodoForm";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";



import "./assets/Login.css";
import "./assets/Todo.css";


const App = observer(() => {
  

  return (
    <div className="app">
      <Login />
      <Register />
      <Home />
    </div>
  );
});

export default App;