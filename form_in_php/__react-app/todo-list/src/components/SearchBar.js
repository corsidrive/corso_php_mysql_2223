import { useState } from "react"

const SearchBar = () => {

   const [taskName,setTaskName] = useState('')
   const [taskDueDate,setTaskDueDate] = useState('')

   function onChange(){

   }


    return (
        <section className="container">
            <pre>
                {taskName}
                {taskDueDate}
            </pre>
                <div className="new_task">
                   
                    <label className="tasks" htmlFor="task-label"></label>
                    {/* var taskName = document.getElementById("mySelect").value; */}
                    {/* [ ] assegnare una variabile di stato al value */}
                    {/* [ ] assegnare onChange */}
                    <input type="text" 
                           className="task-control" 
                           value={taskName}
                           onChange={ evento => setTaskName(evento.target.value)}
                           
                           name="tasks" 
                           id="tasks" 
                           placeholder="new task/search" 
                        />

                    <button type="submit" className="task-button"><strong>Add</strong></button>
                </div>

                <div className="date">
                    
                    <input className="date-task"
                           value={taskDueDate}
                           onChange={evento => setTaskDueDate(evento.target.value)}
                           type="date" />
                </div>
            </section>
    )
}

export default SearchBar