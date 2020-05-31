import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
import Current from "../../components/Current/index"
import WeatherAPI from "../../utils/WeatherAPI"
import { Container, Row } from "react-bootstrap"
import Progress from "../../components/ProgressBar/index"
import Hardiness from "../../components/Hardiness/index"

function Home () {

    // Setting our component's initial state
    const [currentWeather, setCurrentWeather] = useState([])
    let [renderComponent, setrenderComponent] = useState([<Progress/>])


    // Load all plants and store them within setPlants
    useEffect(() => {

        loadCurrentWeather()

        // setTimeout(() => {

            

        // }, 3000);
        
    
    }, [])


    function loadCurrentWeather() {

        WeatherAPI.getTodaysWeather()
        
            .then(res => {

                const currentWeather = res.data;
                if (currentWeather.temp > 0) {
                    setCurrentWeather(currentWeather);
                    renderComponent = [<Current weather={currentWeather} />, <Hardiness/>];
                    setrenderComponent(renderComponent);
                }

            })
            .catch(err => console.log(err));
    }


    return (
        <div className="main-title">

            <Container fluid>

                <Row>

                    {renderComponent}

                </Row>

            </Container>     
            
        </div>
 
    );
  }
  
  
  export default Home;