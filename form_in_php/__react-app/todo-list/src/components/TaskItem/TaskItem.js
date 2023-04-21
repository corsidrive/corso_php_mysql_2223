// const { nome_task, done }= props
// props.done, props.nome_task
function TaskItem({ nome_task, done }){
    return (
        <li className={done ? 'task_gia_fatta': ''}>
            <input  checked={done} type="checkbox" />
             {done}
            <label>{ nome_task }</label>
            <input type="text" defaultValue="Go Siihopping" />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
      </li>
    )
}

export default TaskItem;