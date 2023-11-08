
import './App.css';
import TaskCreate from './components/TaskCreate';//TaskCreate props olaraq esas componente oturulur
import TaskList from './components/TaskList';//TaskList props olaraq esas olaraq componente oturulur
import { useEffect,useContext } from 'react';
import taskContext from './context/task';


function App() {
  const {fetchTasks} = useContext(taskContext)
  useEffect(()=>{//biz get etdikde datalar gelsin deye useEffect istifade edirik bu cur useEffect sehife bir defe redirect olduqda bir defe isleyir daha sonra islemir
    fetchTasks();
  },[])

 

  return (
    <div className="App">
      <TaskCreate/>
      <h2>Tasks</h2>
      <TaskList/>
      
    </div>
  );
}

export default App;
