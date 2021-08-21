import {useState, useEffect} from "react";
import List from "./List";
import "./style.css";
import { v4 as uuidv4 } from 'uuid';

function Todos() {
    const [todos, setTodos] = useState([
        {   
            isCompleted:false,
            todo:"Learn React",
            id:uuidv4(),
        },
        {
            isCompleted:false,
            todo:"Learn Javascript", 
            id:uuidv4(),
        },
        {
            isCompleted:false,
            todo:"Go to the gym",
            id:uuidv4(),
        }
    ]);

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div className="todoapp" >
            <h1>todos</h1>
            <List todos={todos} />
        </div>
    )
}

export default Todos;
