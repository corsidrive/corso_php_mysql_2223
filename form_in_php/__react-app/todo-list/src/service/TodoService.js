
export const addTask = (newTask,todos) => {

    
   
    if(newTask.name === undefined || newTask.name.trim() === "") {
        throw new Error("manca il nome alla task")
    }

    // fai una copia shallow copy
    // const originale = [3,4,6,7];
    // const copia = new Array(...originale)  ---> new Array(3,4,6,7)
    // console.log(...originale); // console.log(3,4,6,7)
    const todosCopy =  new Array(...todos)

    const newTaskCopy = {...newTask,...{name:newTask.name.trim()}} // {3,4,6,7}

    
    // const newTaskCopy = {name:"  patente   ",name:"patente"}

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
    // ! done = false
    // const copia = todos.filter(t=>true)
    return todos.filter(task=>!task.done) 
}

export const completedFilter = todos => todos.filter(task => task.done)

export const dateFilter = () => {}


// const baseUrl = "https://mattiac.000webhostapp.com/rest_api/tasks.php";
const baseUrl = "http://localhost/corso_php_mysql_2223/form_in_php/rest_api/tasks.php";
// const baseUrl = "http://localhost/corso_php_mysql_2223/form_in_php/rest_api/users.php";
// API

export const getTasksApi = () => {
    return fetch(baseUrl).then( res => res.json())
}
 


export const addTaskApi =  (newTask) => {
    

    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
       }
       
    return fetch(baseUrl, { 
         method: "POST",
         body: JSON.stringify(newTask),
         headers: headersList
       }).then(response=>response.json());
       
       
       
}