
export const addTask = (newTask,todos) => {
    // fai una copia shallow copy 
    const todosCopy =  new Array(...todos)
    const newTaskCopy = {...newTask}
    newTaskCopy.id = (new Date).getTime()
    todosCopy.push(newTaskCopy)
    return todosCopy
}
export const removeTask = (task_id,todos) => {
    const todosCopy =  new Array(...todos) // todos.slice()
    const indexToRemove = todosCopy.findIndex(task=>task.id==task_id);
    todosCopy.splice(indexToRemove,1);
    // console.log(indexToRemove)
    return todosCopy
}
export const updateTask = (taskToUpdate,todos) => { 
    const todosCopy =  new Array(...todos) // todos.slice()
    return todosCopy.map(task => {
        if(task.id === taskToUpdate.id) {
            return {...task,...taskToUpdate} // aggiornamento
        }
        return task
    });

}



export const activeFilter = (todos) => {
    return todos.filter(task=>!task.done) 
}

export const completedFilter = todos => todos.filter(task => task.done)

export const dateFilter = () => {}

