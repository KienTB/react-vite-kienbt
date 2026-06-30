import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

// () => {} 
const App = () => {
    
    const [todoList, setTodoList] = useState([])
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
    <>
    <Header/>
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
    <Outlet/>
    <Footer/>
   </>
  )
}

export default App
