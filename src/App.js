import "./App.css";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedTodos = todos.map((t) => {
        if (t.id === editId) {
          t.text = todo
        }
        return t;
      })
      setTodos(updatedTodos)
      setTodo('')
      setEditId('')
      return
    }

    const newTodo = {
      id: `${todo}-${Date.now()}`,
      text: todo
    }
    setTodos([newTodo, ...todos])
    setTodo('')
  };

  const handleDelete =(id)=>{
const delTodo = todos.filter((to)=>to.id !== id)
setTodos([...delTodo]);
  };
  const handleEdit =(id)=>{
    const editTodo = todos.find((i)=>i.id === id);
    setTodo(editTodo.text);
    setEditId(id);
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input name={'todo'} type="text" value={todo} onChange={handleChange} />
          <button type="submit">{editId ? 'Edit' : 'Go'}</button>
        </form>
        <ul className="allTodos">
          {todos.map((t) => (
            <li className="signleTodo">
              <span className="todoText" key={t.id}>{t.text}</span>
              <button onClick={()=> handleEdit(t.id)}>Edit</button>
              <button onClick={()=>handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
