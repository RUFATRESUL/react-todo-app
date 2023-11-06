
import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([])
  const createTask = (title,task) =>{
    const createdTasks = [
      ...tasks,
      {
        id:Math.round(Math.random()*999999),
        title,
        task
      },
    ];
    setTasks(createdTasks);
}
  const handleTaskById = (id) =>{
    const afterDeleteingTask = tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDeleteingTask);
  }
  const editTaskById = (id,updateTitle,updateTask) =>{
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
