import React, {useState, useEffect} from 'react';
import { FaEdit } from "react-icons/fa"
import './style.css'

function TasksCard(t) {

    console.log("TasksCard component initialized");
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(t.tasks);
        console.log("Tasks card rerender triggered");
        
    }, [t])

    
    const makeEdits = () => {
        // console.log("this was clicked");
    }
        
    if(tasks.length === 0) return <p>Loading...</p>

    return (
        <>

            {tasks.map(tasks => (
                <div key={tasks._id} className="task-item">
                    
                    <h3>{tasks.taskName} <FaEdit className="fa-edit" onClick={makeEdits}/></h3>
                    <p>{tasks.taskDetail}</p>
                    <p>TaskID: {tasks._id}</p>
                    <p>Status: {tasks.taskStatus || "not started"}</p>
                    <label htmlFor="due-date">Due Date: </label>
                    <input className="input-due-date" type="date" id="due-date" defaultValue={tasks.dateDue || ''}></input>
                    <span> {tasks.dateDue || 'No due date'}</span>
                    <p> Season: {tasks.taskSeason || 'Not applicable'}</p>
                    <textarea defaultValue={tasks.taskDetail} className="input-task-detail" readOnly></textarea>
                    <p>{tasks.taskNotes}</p>
                    
                    
                    <div className="task-footer">
                        <span className="task-date">Created: {tasks.createdAt}</span>
                        <span className="task-date">Last Modified: {tasks.updatedAt}</span>
                    </div>
                </div>

            ))}

        </>
            
    )
} 

export default TasksCard;