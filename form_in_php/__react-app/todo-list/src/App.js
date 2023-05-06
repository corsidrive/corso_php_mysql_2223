
// import { useState } from 'react';
import './App.css';

import TaskItem from "./components/TaskItem/TaskItem";
import TaskList from './components/TaskList/TaskList';
import SearchBar from './components/SearchBar';
import { activeFilter, addTask, completedFilter, removeTask, updateTask } from './service/TodoService';
import { useState } from 'react';

function App() {

let tasklist = localStorage.getItem('tasklist')
console.log("tasklist",);
if(tasklist == null){
      tasklist = [];
}else{
  tasklist = JSON.parse(tasklist)
}

const [taskListData,setTaskListData] = useState(tasklist);
const [filtredTasks,setFiltredTask] = useState(taskListData);

function parentAddTask(newTask){
  console.log(newTask)
  const newTaskListData = addTask(newTask,taskListData)
  setTaskListData(newTaskListData)
  setFiltredTask(newTaskListData)

  localStorage.setItem('tasklist',JSON.stringify(newTaskListData))
}

function parentRemoveTask(taskId){
      //  console.log("parentRemoveTask "+taskId)
       const res = removeTask(taskId,taskListData)
       setTaskListData(res)
       localStorage.setItem('tasklist',JSON.stringify(res))
}

function parentUpdateTask(taskToUpdate) {
    const res = updateTask(taskToUpdate,taskListData)
    setTaskListData(res)
    localStorage.setItem('tasklist',JSON.stringify(res))
}
  
function onShowCompleted() {
  const res = completedFilter(taskListData)
  setFiltredTask(res)
}

function onShowAll() {
  setFiltredTask(taskListData)
}
    
function onShowActive() {
  const res = activeFilter(taskListData)
  setFiltredTask(res)
}



return (
  <main>
    <SearchBar  parentAddTask={parentAddTask}></SearchBar>

    <button onClick={onShowAll}>all</button>
    <button onClick={onShowActive}>active</button>
    <button onClick={onShowCompleted}>comleted</button>
    {/* <button onClick={aggiungiTask}>Add Task</button> */}
    <TaskList header={'Paolo'} tasks={taskListData}>
      {filtredTasks.map( task => <TaskItem 
                                    key={task.id} 

                                    parentRemoveTask={parentRemoveTask}
                                    parentUpdateTask={parentUpdateTask}

                                    id={task.id}   
                                    done={task.done} 
                                    nome_task={task.name} 
                                    /> )}
    </TaskList>
    <pre>
      {JSON.stringify(filtredTasks,null,2)}
    </pre>
  </main>
)
}

export default App;
