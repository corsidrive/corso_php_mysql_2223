import { activeFilter,addTask,completedFilter ,removeTask,updateTask} from "./TodoService.js";

const tasklist = [
    
        {
        name:"comprare il latte",
        user_id:12,
        id:11,
        due_date:"2023-04-25",
        done:true
        },
        {
        name:"comprare il dentifricio",
        user_id:12,
        id:12,
        due_date:"2023-04-25",
        done:false
        },
        {
        name:"comprare il la farina",
        user_id:10,
        id:13,
        due_date:"2023-04-22",
        done:true
        },
    ]


    const activeTaskList = activeFilter(tasklist)

    if(!(activeTaskList.length == 1)){
        console.log("test fallito");
    }


    const complitedTask = completedFilter(tasklist)

    if(!(complitedTask.length == 2)){
        console.log("test fallito");
    }


    const newTask = {
        name:"fare i compiti",
        user_id :12,
        due_date : "2000-03-01"
    }

    
    const newTasklist = addTask(newTask,tasklist)

    if( !(newTasklist.length == 4) ) {
        console.log("test addTask Fallito")
    }

    const task_id = 12;

    const removedTasklist =  removeTask(task_id,tasklist)
    console.log("----------")
    console.log(removedTasklist)


    const updatedTaskItem = {
        "name" : "Nuovo Nome Task",
        "id" : 12
    } 

    const updatetedTaskslist = updateTask(updatedTaskItem,tasklist)