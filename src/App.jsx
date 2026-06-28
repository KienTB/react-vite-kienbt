import { useState } from 'react';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';

// () => {} 
const App = () => {
    
    const [todoList, setTodoList] = useState([
        {id:1, name: "learn react"},
        {id:2, name: "learn nodejs"},
        {id:3, name: "learn sql"},
        {id:4, name: "learn mysql"}
    ])
    const kienbt = "MU";
    const age = 23;
    const data = {
        address: "ha noi",
        country: "viet nam"
    }

    const addNewTodo = (name) => {
        const newTodo = {
            id: 5,
            name: name
        }
        setTodoList([...todoList, newTodo])
    }
    
  return(
   <div className="todo-container">
    <div className="todo-title"> Todo List</div>
        <TodoNew
            addNewTodo={addNewTodo}
        />
        <TodoData
            name={kienbt}
            age={age}
            data={data}
            todoList={todoList}
        />
   </div> 
  )
}

export default App
