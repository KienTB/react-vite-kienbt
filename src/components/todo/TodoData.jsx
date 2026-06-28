const TodoData = () => {
    return (
        <div className="todo-data">
            <div>Learning React</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(props.TodoList)}
            </div>
        </div>
    )
}