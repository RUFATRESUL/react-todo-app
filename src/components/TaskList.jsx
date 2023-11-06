import TaskShow from "./TaskShow";

function TaskList({list,onDelete,onUpdate}) {
    console.log(list);
    return ( <div className="taskList">
        {list.map((task,index)=>{
            return <TaskShow key={index} taskOne={task} onDelete={onDelete} onUpdate={onUpdate}/>
        })}
    </div> );
}

export default TaskList;