import { useState } from "react";
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

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');
    const [categories, setCategories] = useState(['Pessoal', 'Estudos', 'Trabalho']);
    const [selectedCategory, setSelectedCategory] = useState('');

    // Create todo
    const createTodo = async (e) => {
        e.preventDefault(e);
        if (input === '' || selectedCategory === '') {
            alert('Por favor, preencha a tarefa e selecione uma categoria válida.');
            return;
        }
        await addDoc(collection(db, 'TodoList'), {
            text: input,
            category: selectedCategory,
            completed: false,
        });
        setInput('');
        setSelectedCategory('');
    };

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={createTodo}>
            <input 
                value = {input}
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                placeholder='Adicionar tarefa' 
            />
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            {categories.map((category, index) => (
                <option key={index} value={category}>
                {category}
                </option>
            ))}
        </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm;