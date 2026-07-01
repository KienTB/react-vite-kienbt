import { useState } from "react";
import TodoNew from "./TodoNew";
import TodoData from "./TodoData";  

const TodoApp = () => {
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
    return (
        <div>
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
        </div>
    )
}

export default TodoApp;