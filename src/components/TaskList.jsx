import TaskShow from "./TaskShow";

function TaskList({list,onDelete,onUpdate}) {//TaskList funksiyasinin icine list,onDelete,onUppdate propslarini parametr olaraq otururuk
    return ( <div className="taskList">
        {list.map((task,index)=>{//TaskList icindeki taskalri map metodundan istifade ederek index gore siralayir
            return <TaskShow key={index} taskOne={task} onDelete={onDelete} onUpdate={onUpdate}/>//bura TaskShow icindeki datalar parent componente props olaraq oturulur
        })}
    </div> );
}

export default TaskList;