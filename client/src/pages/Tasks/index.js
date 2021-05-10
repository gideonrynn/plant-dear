import React, {useEffect, useState } from "react";
import TasksAPI from "../../utils/TasksAPI"
import TasksCard from "../../components/TasksCard"
import "./style.css";

function Tasks () {

    const [tasks, setTasks] = useState([])

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadTasks()
        // loadOne()
        console.log("Tasks page render triggered")
    
    }, [])

    const loadTasks = () => {

        TasksAPI.getAllTasks()
            .then(res => {
                // console.log(res.data);
                const currentTasks = res.data;

                setTasks(currentTasks);
             
            })
            .catch(err => console.log(err));
    };

    const loadOne = () => {
        console.log("Load one has been loaded")

        TasksAPI.getOneTask()
            .then(res => {
                console.log("This is from the one to many relationship", res.data);
             
            })
            .catch(err => console.log(err));
    };


    return (
        <>
            <div className="tasks-container">
                
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