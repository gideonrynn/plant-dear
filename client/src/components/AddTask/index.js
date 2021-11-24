import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap"
import AddTaskAPI from "../../utils/TasksAPI"
import './style.css'

function AddTask() {

    const [newTask, setNewTask] = useState({
        taskName: "",
        taskDetail: "",
        taskNotes: "",
        dateDue: "",
        taskStatus: "",
    });

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    useEffect(() => {}, []);

    function handleInputChange(event) {
        // const { name, value } = event.target;
        let fieldName = event.target.name
        let fieldValue = event.target.value
        setNewTask({...newTask, [fieldName]: fieldValue})
        console.log(newTask)
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(newTask)
        AddTaskAPI.addTask({
            taskName: newTask.taskName,
            taskDetail: newTask.taskDetail,
            taskNotes: newTask.taskNotes,
            dateDue: newTask.dateDue,
            taskStatus: newTask.taskStatus,
            taskSeason: newTask.taskSeason,
            createdAt: newTask.createdAt,
            updateAt: newTask.updatedAt,
        })
            .then(window.location.reload(true))
            .catch(err => console.log(err))
        
    }

    return (

        <>
            <form className="add-task-form" onSubmit={handleFormSubmit}>
                <legend>Add New Task</legend>
                
                <label htmlFor="taskName" className="new-task-label">Name</label>
                    <input className="new-task-input" type="text" name="taskName" value={newTask.taskName} onChange={handleInputChange}/>
                
                <label htmlFor="taskDetail" className="new-task-label">Detail (what I want to do and why)</label>
                    <textarea className="new-task-input" name="taskDetail" value={newTask.taskDetail} onChange={handleInputChange}/>
                
                <label htmlFor="taskNotes" className="new-task-label">Notes (how)</label>
                    <textarea className="new-task-input" name="taskNotes" value={newTask.taskNotes} onChange={handleInputChange}/>

                <label htmlFor="dateDue" className="new-task-label">Date Due</label>
                    <input className="new-task-input" type="date" name="dateDue" value={newTask.dateDue} onChange={handleInputChange}/>

                <label htmlFor="taskSeason" className="new-task-label">Season</label>
                    <input className="new-task-input" type="text" name="taskSeason" value={newTask.taskSeason} onChange={handleInputChange}/>

                <input type="submit" value="Submit"/>

            </form>
      
      </>
    
    );

}

export default AddTask;