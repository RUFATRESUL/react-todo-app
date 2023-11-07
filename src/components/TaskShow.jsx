import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({taskOne,onDelete,onUpdate}) {
   const title = taskOne.title;//create olunmus title title adina beraber edilerek Jsx formatinda {breakText(title)} seklinde verilir  breakText funksiyasinin oturulur
   const task = taskOne.task;//create olunmus task title adina beraber edilerek Jsx formatinda {breakText(task)} seklinde verilir  breakText funksiyasinin oturulur
  const [editTask, setEditTask] = useState(false)//useState snippet istifade ederek edit etdiyimiz taski deyerni setEditTask deyerinden istifade edrek update olunmus veziyyetde gosteririk

   const breakText = (text) =>{
    const maxLength = 25;//bu kodda daxil edilen textin length yeni uzunlugu 25 dir
    if (text.length <= maxLength){//eger text length maxlength kicik veya ona beraber olarsa 
        return text;//return orginal text qaytaracaq
    }else{//deyilse
        return (
            <div className="break-text">
            {text.match(new RegExp(`.{1,${maxLength}}`, 'g')).map((line, index) => (//return olaraq bize text i string match metodu vasitesi ile uygunlugunu yoxlayir. daha sonra RegEx istifade ederk daxil edilen texti maxLength otuduyumuz deyere gore text setrlere boluruk
              <p key={index}>{line}</p>//her setr p tag icine atariq
            ))}
          </div>
        )
    }
   };
   const handleDeleteTask = () =>{//handleDeleteTask funksiyasi vasitesile tasklarin silinmesi heyata kecirilir 
    onDelete(taskOne.id);//tasklarin id gore silinir
   }
   const handleUpdateTask = () =>{//handleUpdateTask funksiyasina gore update funksiyasi heyata kecirilir
    setEditTask(!editTask);//!editTask bu cur yazilisi true menasini verir yeni update veziyyetindedirse
   }
   const handleSubmit = (id,updateTitle,updateTask) =>{//handleSubmit funksiyasinda ise tasklari title ve task hisselerine  gore parametr otururuk.
    setEditTask(false);
    onUpdate(id,updateTitle,updateTask);//tasklari id gore title ve task hissesini update edirik
   }
    return ( <div className="taskShow">
      {/* TaskCreate props olaraq icindeki datalarla Task Show otururuk. editTask ? true -sa update button click edilib melumatlar deyisdirilidikden sonra Edit button cilick olunarsa bize update olunmus data gosterilir*/}
      {editTask ? <TaskCreate tasks={taskOne} taskFormUpdate={true} onUpdate={handleSubmit}/>
      //deyilse default veziyyetini gosterir create edildikde yardilan veziyyetini
       : (<div> 
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