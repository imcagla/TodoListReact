import {useState, useEffect} from "react";
import List from "./List";
import Form from "./Form";
import "./style.css";

function Todos() {
    const [todos, setTodos] = useState([
        {   
            isCompleted:false,
            todo:"Learn React",
            id:1,
        },
        {
            isCompleted:false,
            todo:"Learn Javascript", 
            id:2,
        },
        {
            isCompleted:false,
            todo:"Go to the gym",
            id:3,
        }
    ]);

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div className="todoapp" >
            <h1>todos</h1>
            <Form addTodos={setTodos} todos={todos} />
            <List todos={todos} />
        </div>
    )
}

export default Todos;
