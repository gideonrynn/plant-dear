import React, {useEffect, useState } from "react";
import TasksAPI from "../../utils/TasksAPI"
import TasksCard from "../../components/TasksCard"
import "./style.css";

function Tasks () {

    // create a tasks component and render it in the same way
    // add, delete, modify tasks
    // think about how to tie it with ids to specific plants, so when you turn up the plant, you turn up the task tied to it
    // maybe the task has to be created from the plant
    // or a search to find the plant id, and have the id as a foreign key in the tasks table

    const [tasks, setTasks] = useState([])

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadTasks()
        console.log("Tasks page render triggered")
    
    }, [])

    const loadTasks = () => {

        TasksAPI.getAllTasks()
            .then(res => {
                console.log(res.data);
                const currentTasks = res.data;

                setTasks(currentTasks);
             
            })
            .catch(err => console.log(err));
    };


    return (
        <>
            <div className="tasks-container">
                <h1>Tasks</h1>
                
                <div className="tasks-div">

                    <TasksCard 
                        tasks={tasks} 
                    />
                </div>

            </div>
        </>
    )
}

export default Tasks;