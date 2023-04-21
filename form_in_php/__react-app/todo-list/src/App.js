
import { useState } from 'react';
import './App.css';

import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from './components/TaskList/TaskList';
function App() {

  // const taskListData = [
  //   {
  //     task_id: 10,
  //     user_id: 12,
  //     name: "comprare il latte",
  //     due_date:"2023-04-04",
  //     done: true
  //   },
  //   {
  //     task_id: 12,
  //     user_id: 12,
  //     name: "leggere un mauale a caso",
  //     due_date:"2023-04-21",
  //     done: false
  //   }
    
  //   ]

    const [taskListData,setTaskListData] = useState([])
    
    function aggiungiTask() {
      setTaskListData((attuale)=>{
        const new_attuale = [...attuale]
        new_attuale.push(
            {
              task_id: 12,
              user_id: 12,
              name: "leggere un mauale a caso",
              due_date:"2023-04-21",
              done: false
            }
        );
        return new_attuale;
      })
      // alert("tutto ok");

    }

   
    
return (
  <main>
    <button onClick={aggiungiTask}>Add Task</button>
    <TaskList header={'Paolo'} tasks={taskListData}>
      {taskListData.map( task => <TaskItem key={task.task_id} done={task.done} nome_task={task.name} /> )}
    </TaskList>

    <TaskList header={'Giovanni'} tasks={taskListData}>
      { taskListData.map( task => <TaskItem key={task.task_id} done={task.done} nome_task={task.name} /> )}
    </TaskList>
  </main>
)
}

export default App;
