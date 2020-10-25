import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
import Current from "../../components/Current/index"
import ModPlants from "../../components/ModPlants/index"
import WeatherAPI from "../../utils/WeatherAPI"
import { Container, Row } from "react-bootstrap"
import Progress from "../../components/ProgressBar/index"
import Hardiness from "../../components/Hardiness/index"

// import HomePage from "../../components/Home Page";

function Home () {

    // Setting our component's initial state
    const [currentWeather, setCurrentWeather] = useState([])
    let [renderComponent, setrenderComponent] = useState([<Progress/>])
 


    // Load all plants and store them within setPlants
    useEffect(() => {

        setTimeout(() => {

            loadCurrentWeather()

        }, 2000);
        
    
    }, [])


    function loadCurrentWeather() {
        
        

        WeatherAPI.getTodaysWeather()
        
            .then(res => {

                const currentWeather = res.data;
                if (currentWeather.temp > 0) {
                    setCurrentWeather(currentWeather);
                    renderComponent = [
                        <Container>
                            <Row>
                                {/* <Current weather={currentWeather} /> */}
                                <ModPlants/>
                            </Row>
                                <br></br> 
                            <Row>
                                <Hardiness weather={currentWeather}/>
                            </Row>
                            <br></br> 
                            
                        </Container>];
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