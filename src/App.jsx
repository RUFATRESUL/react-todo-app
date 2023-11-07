
import { useEffect, useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';//TaskCreate props olaraq esas componente oturulur
import TaskList from './components/TaskList';//TaskList props olaraq esas olaraq componente oturulur
import axios from 'axios'


function App() {
  const [tasks, setTasks] = useState([])//ilc once useState snippet istifade edrek default deyeri bos array olan tasks ve bu tasks update etmek ucun settasks 

  const createTask = async (title,task) =>{
    const response = await axios.post('http://localhost:3004/tasks',{
      title,
      task
    });
    console.log(response);
    const createdTasks = [...tasks,response.data];
    setTasks(createdTasks);
  }

  const fetchTasks =  async () =>{
    const response =  await axios.get('http://localhost:3004/tasks')
    debugger
    setTasks(response.data)
  }

  useEffect(()=>{
    fetchTasks();
  },[])

  const handleTaskById = async(id) =>{
    await axios.delete(`http://localhost:3004/tasks/${id}`)
    const afterDeleteingTask = tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDeleteingTask);
  }

  const editTaskById = async(id,updateTitle,updateTask) =>{
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
