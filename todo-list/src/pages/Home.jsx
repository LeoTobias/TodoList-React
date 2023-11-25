import { useState, useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { observer } from "mobx-react-lite";
import { db } from '../services/firebaseConfig';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

import Todo from "../components/Todo";
import Search from "../components/Search";
import Filter from "../components/Filter";
import TodoForm from "../components/TodoForm";


import "../assets/Todo.css";

export const Home = () => {
      const [todos, setTodos] = useState([]);

       // Read todo from firebase
      useEffect(() => {
        const q = query(collection(db, 'TodoList'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let todosArr = [];
          querySnapshot.forEach((doc) => {
            todosArr.push({ ...doc.data(), id: doc.id });
          });
          setTodos(todosArr);
        });
        return () => unsubscribe();
      }, []);



       // Update todo in firebase
      const toggleComplete = async (todo) => {
        await updateDoc(doc(db, 'TodoList', todo.id), {
          completed: !todo.completed,
        });
      };

      // Delete todo
      const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'TodoList', id));
      };


      //Filtro
      const [filter, setFilter] = useState("All");
      const [sort, setSort] = useState("Asc");
    
      const [search, setSearch] = useState("");
    
      const addTodo = (text, category) => {
        const newTodos = [...todos, 
          { id: Math.floor(Math.random() * 1000), text, category, completed: false }
        ];
        setTodos(newTodos);
      };
    
    
      return (
        <div className="app">
          <h1>Lista de Tarefas</h1>
          <Search search={search} setSearch={setSearch} />
          <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
          <div className="todo-list">
            {todos
              .filter((todo) =>
                filter === "All"
                  ? true
                  : filter === "Completed"
                  ? todo.completed
                  : !todo.completed
              )
              .sort((a, b) =>
                sort === "Asc"
                  ? a.text.localeCompare(b.text)
                  : b.text.localeCompare(a.text)
              )
              .map((todo, index) => (
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                />
              ))}
          </div>
          <TodoForm addTodo={addTodo} />
        </div>
      );
}

export default Home;