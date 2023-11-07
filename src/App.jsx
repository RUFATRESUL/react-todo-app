
import { useEffect, useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';//TaskCreate props olaraq esas componente oturulur
import TaskList from './components/TaskList';//TaskList props olaraq esas olaraq componente oturulur
import axios from 'axios'//axios datalarin  get post put delete etmek ucun istifade olunur


function App() {
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

  useEffect(()=>{//biz get etdikde datalar gelsin deye useEffect istifade edirik bu cur useEffect sehife bir defe redirect olduqda bir defe isleyir daha sonra islemir
    fetchTasks();
  },[])

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

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h2>Tasks</h2>
      <TaskList list={tasks} onDelete={handleTaskById} onUpdate={editTaskById}/>
      
    </div>
  );
}

export default App;
