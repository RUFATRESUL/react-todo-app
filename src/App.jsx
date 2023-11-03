
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
  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h2>Tasks</h2>
      <TaskList list={tasks}/>
      
    </div>
  );
}

export default App;
