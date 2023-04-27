// const { nome_task, done }= props
// props.done, props.nome_task


function TaskItem({ nome_task, done,id,parentRemoveTask }){

    function onRemoveTask(){
            console.log("task "+id)
            parentRemoveTask(id)
    }

    function onUpdateStatus() {
            console.log(id,!done)
            
    }

    return (
        <li className={done ? 'task_gia_fatta': ''}>
            <input onChange={onUpdateStatus} checked={done} type="checkbox" />
             {done}
            <label>{ nome_task }</label>
            <input type="text" defaultValue="Go Siihopping" />
            <button className="edit">Edit</button>
            <button className="delete" onClick={onRemoveTask} >Delete</button>
      </li>
    )
}

export default TaskItem;