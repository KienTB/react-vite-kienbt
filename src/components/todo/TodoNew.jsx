import { useState } from "react";

const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState("eric")

    const {addNewTodo} = props;

    const handleClick = () => {
        addNewTodo(valueInput)
        console.log(">>> check valueInput: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input type="text" 
                value={valueInput}
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer"}}
                onClick={() => handleClick()}>
                    Add
                </button>
            <span>
                My text input is = {valueInput}
            </span>
        </div>
    )
}

export default TodoNew;