
// import { useState } from 'react';
import './App.css';

import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from './components/TaskList/TaskList';
import SearchBar from './components/SearchBar';

function App() {

  const taskListData = []
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


    
return (
  <main>
    <SearchBar></SearchBar>

    {/* <button onClick={aggiungiTask}>Add Task</button> */}
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
