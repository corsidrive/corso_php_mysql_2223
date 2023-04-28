// const { nome_task, done }= props
// props.done, props.nome_task

import { useState } from "react"


function TaskItem({ nome_task, done,id,parentRemoveTask ,parentUpdateTask}){
    const [doneCheckbox,setDoneCheckbox]=useState(done)

    function onRemoveTask(){
            console.log("task "+id)
            parentRemoveTask(id)
    }

    function onUpdateStatus(event) {
        console.log(event.target.checked)
        setDoneCheckbox(event.target.checked)
        
    }

    return (
        <li className={done ? 'task_gia_fatta': ''}>
            
            <input onChange={onUpdateStatus}
                   checked={doneCheckbox}
                  
                   type="checkbox" />
             {done}
            <label>{ nome_task }</label>
            <input type="text" defaultValue="Go Siihopping" />
            <button className="edit">Edit</button>
            <button className="delete" onClick={onRemoveTask} >Delete</button>
      </li>
    )
}

export default TaskItem;