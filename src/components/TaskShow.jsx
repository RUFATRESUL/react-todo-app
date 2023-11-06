import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({taskOne,onDelete,onUpdate}) {
   const title = taskOne.title;
   const task = taskOne.task;
  const [editTask, setEditTask] = useState(false)
   const breakText = (text) =>{
    const maxLength = 25;
    if (text.length <= maxLength){
        return text;
    }else{
        return (
            <div className="break-text">
            {text.match(new RegExp(`.{1,${maxLength}}`, 'g')).map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )
    }
   };
   const handleDeleteTask = () =>{
    onDelete(taskOne.id);
   }
   const handleUpdateTask = () =>{
    setEditTask(!editTask);
   }
   const handleSubmit = (id,updateTitle,updateTask) =>{
    setEditTask(false);
    onUpdate(id,updateTitle,updateTask);
   }
    return ( <div className="taskShow">
      {editTask ? <TaskCreate tasks={taskOne} taskFormUpdate={true} onUpdate={handleSubmit}/> : (<div> 
        <h3>Your mission :</h3>
        {breakText(title)}
        <h3>Things to do :</h3>
        {breakText(task)}
    
        <div>
        <button className="buttonDelete" onClick={handleDeleteTask}>Delete</button>
        <button className="buttonUpdate" onClick={handleUpdateTask}>Update</button>
        </div>
        </div>)}
       
        
    </div> );
}

export default TaskShow;