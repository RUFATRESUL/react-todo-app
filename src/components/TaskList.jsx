import TaskShow from "./TaskShow";

function TaskList({list}) {
    return ( <div className="taskList">
        {list.map((task,index)=>{
            return <TaskShow key={index} taskOne={task}/>
        })}
    </div> );
}

export default TaskList;