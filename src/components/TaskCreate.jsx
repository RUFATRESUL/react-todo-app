import { useState } from "react"


function TaskCreate({onCreate}) {
    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')
    
    const HandleTitle = (event) =>{
        setTitle(event.target.value)
    }
    const HandleTasks = (event) =>{
        setTask(event.target.value)
    }
    const HandleSubmit = (event) =>{
        event.preventDefault()
        onCreate(title,task)
        setTitle('')
        setTask('')

    }
    return ( <div className="TaskContainer">
        <form className="TaskForm">
            <h3>Please Add Task :</h3>
            <label>Title :</label>
            <input className="TaskInput" onChange={HandleTitle} value={title}/>
            <label>Enter Task :</label>
            <textarea className="TaskInput" cols="30" rows="5" onChange={HandleTasks} value={task}></textarea>
            <button className="AddButton" onClick={HandleSubmit}>Add</button>


        </form>
    </div> );
}

export default TaskCreate;