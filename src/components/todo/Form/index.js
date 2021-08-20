import {useState, useEffect} from 'react'

const initialFormValues = { todo:""};

function Form({ addTodos, todos }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [todos]);

    const onChangeInput = (e) =>{
        setForm({ ...form, 
            isCompleted: false,
            [e.target.id]: todos.length+1,
            [e.target.name]: e.target.value, 
            
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.todo === ''){
            return false;
        }
        addTodos([...todos, form ]);
    }

    return (
        <form className="header" onSubmit={onSubmit} >
            <div>
                <input 
                className="new-todo"
                isCompleted= "isCompleted"
                name="todo" 
                id="id"
                placeholder="What needs to be done?" 
                value={form.todo}
                onChange={onChangeInput} />

            </div>
            <div className="btn">
            </div>
            
            
        </form>
    )
}

export default Form
