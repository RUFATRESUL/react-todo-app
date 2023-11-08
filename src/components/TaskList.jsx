import TaskShow from "./TaskShow";
import {useContext } from 'react';
import taskContext from '../context/task';
function TaskList() {//TaskList funksiyasinin icine list,onDelete,onUppdate propslarini parametr olaraq otururuk
    const {tasks} = useContext(taskContext)
    return ( <div className="taskList">
        {tasks.map((task,index)=>{//TaskList icindeki taskalri map metodundan istifade ederek index gore siralayir
            return <TaskShow key={index} taskOne={task}/>//bura TaskShow icindeki datalar parent componente props olaraq oturulur
        })}
    </div> );
}

export default TaskList;