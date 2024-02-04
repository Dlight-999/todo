import React, { ChangeEvent, useState } from 'react';
import './App.css';

function App() {
  const[todo,setTodo] = useState<string>('');
  const[note,setNote] = useState<string[]>([]);
  const handleTodo = (e: ChangeEvent<HTMLInputElement>) =>{
    setTodo(e.target.value);
  }
  const addTodo = () =>{
    if(todo.trim() !== ''){
      setNote([...note, todo]);
      setTodo('');
    }
  }

  const removeTodo = (index:number) =>{
    const updateNote = [...note];
    updateNote.splice(index,1);
    setNote(updateNote);
  }
  const clearAll = () =>{
    setNote([]);
  }

  return (
    <>
    <div className='App'>
      <div className='container'>
      <h2>ToDo List</h2>
      <input type="text" name="" id="" className='input' value={todo} onChange={handleTodo}/>
      <button onClick={addTodo}>Add</button>
      <button onClick={clearAll}>Clear All</button>
      </div>
      
        {note.map((item, index)=>(
          <div className='show'>
          <p>{item}</p>
          <div className='click' onClick={() => removeTodo(index)}><button>Delete</button></div>
        </div>
        ))}
       
      </div>
      
    </>
  );
}

export default App;
