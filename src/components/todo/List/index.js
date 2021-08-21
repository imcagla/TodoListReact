import {useState, useEffect} from 'react'
import Form from '../Form';

function List({ todos }) {
    const [check, setCheck] = useState(false);
    const [filteredData, setFilteredData] = useState(todos);
    const [filterKey, setFilterKey] = useState("");
    const [lastData, setLastData] = useState(filteredData);
    

    const handleFiltering = ((filter) =>{
        setFilterKey(filter)
    });

    useEffect( () => {
        switch(filterKey){
        case "Completed":
            setLastData(filteredData.filter(todo => todo.isCompleted));
            break;
        case "Active":
            setLastData(filteredData.filter(todo => !todo.isCompleted));
            break;
        case "":
            setLastData(filteredData);
            break;
    }}, [filteredData, filterKey])

    const deleteTodo =((id) => {
        setFilteredData(filteredData.filter((todo) => 
            todo.id !== id
        ))
    })

    const clearCompleted =(() => {
        setFilteredData(filteredData.filter((todo) => 
            !todo.isCompleted
        ))
    })

    useEffect(() => {
        setFilteredData(filteredData.map((todo)=> ({...todo, isCompleted: check})))
    }, [check])

    const setAllChecked =(() => {
        setCheck(!check)
    });
    
    const handleToDoComplete = ((id) => {
        setFilteredData(filteredData.map((todo) => {
            return todo.id == id ? {...todo, isCompleted:!todo.isCompleted} : todo
          })); 
     })

    return (
        <div>
            <Form addTodos={setFilteredData} todos={filteredData} />
            <section className="main">
                <input className="toggle-all" id="toggle-all" type="checkbox" ></input>
                <label htmlFor="toggle-all" onClick={setAllChecked}>Abc</label>

                <ul className="todo-list">
                    {
                        lastData.map((child, index) => (
                            <li key={index} className={child.isCompleted?"completed":""}> 
                                <div className="view">
                                    <input className="toggle" type="checkbox" 
                                    checked={child.isCompleted}
                                    onClick={() => handleToDoComplete(child.id)}  
                                    onChange={() => handleToDoComplete(child.id)} />

                                    <label>{child.todo} </label>
                                    <button className="destroy" onClick={() => deleteTodo(child.id)} ></button>
                                </div>    
                            </li>
                        ))
                    }
                </ul>
            </section>

            <footer className="footer">
                <span className="todo-count">{filteredData.length} items left</span>

                <ul className="filters">
                    <li>
                        <a onClick={() => handleFiltering("")} className={filterKey===""?"selected":""} >All</a>
                    </li>
                    <li>
                        <a onClick={() => handleFiltering("Active")} className={filterKey==="Active"?"selected":""}  >Active</a>
                    </li>
                    <li>
                        <a onClick={() => handleFiltering("Completed")} className={filterKey==="Completed"?"selected":""}  >Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={() => clearCompleted()}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default List
