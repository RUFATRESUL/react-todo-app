import { useState } from "react"


function TaskCreate({onCreate,tasks,taskFormUpdate,onUpdate}) {//TaskCreate funksiyasinin icinde verdiyimiz parametrler props olaraq diger componentlerden oturduyumuz datalar funksiya icinde teyin edirik
    const [title, setTitle] = useState(tasks ? tasks.title : '')//useState snippet istifade ederek title default deyerini ve default deyeri update etmek ucun title setTitle adinda iki deyisen teyin edirik. useState(tasks ? tasks.title : '') bu ifade eger tasks true -sa yeni update olunubsa update olunmus veziyyetini gosterilsin : deyilse bos string qayatrsin ""
    const [task, setTask] = useState(tasks ? tasks.task : '')//useState snippet istifade ederek task default deyerini ve default deyeri update etmek ucun task setTask adinda iki deyisen teyin edirik
    
    const HandleTitle = (event) =>{//title default deyerini deyismek ucun HandleTitle adinda arrow function yazariq
        setTitle(event.target.value)//bu ifade title default olan bos deyerini update etmek ucun istifade olunur
    }
    const HandleTasks = (event) =>{//task default deyerini deyismek ucun HandleTitle adinda arrow function yazariq
        setTask(event.target.value)//bu ifade task default olan bos deyerini update etmek ucun istifade olunur
    }
    const HandleSubmit = (event) =>{//burda button onclick olduqda bas verecek actionlar ucun HandleSubmit adinda arrow function yaradiriq
        event.preventDefault()//button onclick olduqda sehifenin refresh olunmasinin qarsisinin alinmasi ucun preventDefault ile default veziyyetinin qarsini aliriq
        if(taskFormUpdate){//daha sonra todolist create olunmusmu yoxsa update olunmusmu bilmek ucun if else condition istifade edirik
            onUpdate(tasks.id,title,task)//ilk once eger taskFormUpdate olunubsa yeni movcud listin title ,task deyisdirilibse .TaskShow.jsx yazdigimiz onUpdate icindeki deyeri props olaraq taskCreate otururuk
        }else{// deyilse yeni false ise default olaraq yeni bir list yaradir.

            onCreate(title,task)
        }
        setTitle('')//title daxil etdikden sonra inputun icinde datani silerek bos input qaytarir
        setTask('')//task daxil etdikden sonra inputun icinden datani silerek bos input qaytaarir

    }
    return ( 
    <div>
        {taskFormUpdate ?  //burda taskFormUpdate taskShow dan props olaraq  melumatlari taskCreate oturur."taskformUpdate ?" bu ifade eger taskFormUpdate true olarsa form update olunmus sayilir daha sonra taskCreateyaratdigimiz eyni form qeyd edirik
        
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
    //: yazildiqda ise else ifadesini eks etdirir yeni false ise create olunmus veziyyetde saxlayir
    : ( <div className="TaskContainer">
            <h3>Please Add Task :</h3>
        <form className="TaskForm">
            <label>Title :</label>
            {/* title inputuna text daxil ede bilmek ucun onChange action veririk daha sonra funksionalliq vermek ucun onChange icine Handletitle adini veririk */}
            <input className="TaskInput" onChange={HandleTitle}  value={title}/>
            <label>Enter Task :</label>
            {/* task xanasina text daxil ede bilmek ucun onChange action veririk daha sonra funksionalliq vermek ucun onChange icine Handletask adini veririk */}
            <textarea className="TaskInput" cols="30" rows="5" onChange={HandleTasks} value={task}></textarea>
            {/* button click olunduqda daxil edilen melumatlar elave olunsun deye onClick action istifade edirik  */}
            <button className="AddButton" onClick={HandleSubmit}>Add</button>


        </form>
    </div>)}</div>
    );
}

export default TaskCreate;
