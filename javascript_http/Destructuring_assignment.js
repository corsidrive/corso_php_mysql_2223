const task = {
    "name":"comprare il latte",
    "due_date":"2000-01-01",
    "done":true
}
frase(task)

// const frase = `Ti ricordi che il ${task.due_date} 
//                hai ${task.name}`

// const {name,due_date} = task;



function frase({name,due_date}) {
    
    const frase2 = `Ti ricordi che il ${due_date} hai ${name}`
    console.log(frase2)
    
}
               

