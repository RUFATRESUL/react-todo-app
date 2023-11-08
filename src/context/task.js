import { createContext } from "react";
import axios from 'axios'//axios datalarin  get post put delete etmek ucun istifade olunur
import { useState } from 'react';
const taskContext = createContext();
function Provider({children}){
    const [tasks, setTasks] = useState([])//ilc once useState snippet istifade edrek default deyeri bos array olan tasks ve bu tasks update etmek ucun settasks 

  const createTask = async (title,task) =>{//ilk once tasklari create ederek post metodu ile db.json gonderirik asinxron calissin deye async istifade edirik promise olmasin deye
    const response = await axios.post('http://localhost:3004/tasks',{
      title,
      task
    });
    console.log(response);
    const createdTasks = [...tasks,response.data];
    setTasks(createdTasks);
  }

  const fetchTasks =  async () =>{//bu kodda db.json fayilina gonderdiyimiz tasklari sehifenin refresh olunmasi teqdirde gonderdiyimiz butun datalar gelir
    const response =  await axios.get('http://localhost:3004/tasks')
    debugger
    setTasks(response.data)
  }
  const handleTaskById = async(id) =>{//datalari delete etdikde json silinsin deye bu usuldan istifade edirik
    await axios.delete(`http://localhost:3004/tasks/${id}`)//mutleq id daxil edilmedirki hansi id gore datalarin silindiyin bilsin
    const afterDeleteingTask = tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDeleteingTask);
  }

  const editTaskById = async(id,updateTitle,updateTask) =>{//tasklari edit etdikde id deyerini adxil etmeliyik 
    await axios.put(`http://localhost:3004/tasks/${id}`,{
      title:updateTitle,
      task:updateTask
    })
    const updateingTask = tasks.map((task)=>{
      if(task.id === id){
        return {id,title:updateTitle,task:updateTask}
      }
      return task;
    })
    setTasks(updateingTask);
  }
  const sharedValueAndMethod = {
    tasks,
    createTask,
    fetchTasks,
    handleTaskById,
    editTaskById
  }
    return(

    <taskContext.Provider value={sharedValueAndMethod}>
        {children}
    </taskContext.Provider>
    )
}

export {Provider}
export default taskContext;