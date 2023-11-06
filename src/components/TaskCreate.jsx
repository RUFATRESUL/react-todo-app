import { useState } from "react"


function TaskCreate({onCreate,tasks,taskFormUpdate,onUpdate}) {
    const [title, setTitle] = useState(tasks ? tasks.title : '')
    const [task, setTask] = useState(tasks ? tasks.task : '')
    
    const HandleTitle = (event) =>{
        setTitle(event.target.value)
    }
    const HandleTasks = (event) =>{
        setTask(event.target.value)
    }
    const HandleSubmit = (event) =>{
        event.preventDefault()
        if(taskFormUpdate){
            onUpdate(tasks.id,title,task)
        }else{

            onCreate(title,task)
        }
        setTitle('')
        setTask('')

    }
    return ( 
    <div>
        {' '}
        {taskFormUpdate ?  
        
    <div className="taskEdit">
        <h3>please edit the task :</h3>
    <form className="TaskForm">
        <label>Edit the title :</label>
        <input className="TaskInput" onChange={HandleTitle} value={title}/>
        <label>Edit the task :</label>
        <textarea className="TaskInput" cols="30" rows="5" onChange={HandleTasks} value={task}></textarea>
        <button className="AddButton update-button" onClick={HandleSubmit}>Edit</button>
    </form>
    </div> 
    : ( <div className="TaskContainer">
            <h3>Please Add Task :</h3>
        <form className="TaskForm">
            <label>Title :</label>
            <input className="TaskInput" onChange={HandleTitle} value={title}/>
            <label>Enter Task :</label>
            <textarea className="TaskInput" cols="30" rows="5" onChange={HandleTasks} value={task}></textarea>
            <button className="AddButton" onClick={HandleSubmit}>Add</button>


        </form>
    </div>)}</div>
    );
}

export default TaskCreate;