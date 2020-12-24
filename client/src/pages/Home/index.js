import React, {useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
// import Current from "../../components/Current/index"
// import ModPlants from "../../components/ModPlants/index"
import WatchlistSnip from "../../components/WatchlistSnip/index"
import WeatherAPI from "../../utils/WeatherAPI"
import { Container, Row, Col, CardColumns } from "react-bootstrap"
import Progress from "../../components/ProgressBar/index"
// import Hardiness from "../../components/Hardiness/index"
import HardinessSnip from "../../components/HardinessSnip"
import HumiditySnip from "../../components/HumiditySnip";
import WaterSnip from "../../components/WaterSnip";
import PropaSnip from "../../components/PropaSnip";

// import HomePage from "../../components/Home Page";

function Home () {

    // Setting our component's initial state
    const [currentWeather, setCurrentWeather] = useState([])
    let [renderComponent, setrenderComponent] = useState([<Progress/>])
 


    // Load all plants and store them within setPlants
    useEffect(() => {

        setTimeout(() => {

            loadStaticWeather()
            // loadCurrentWeather()

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
                            {/* to set number of columns, add sm={4} to rows */}
                            <Row>
                                <Col sm={3} >
                                    <WatchlistSnip/>
                                </Col>
                                {/* <Col sm={3}>
                                    <HardinessSnip weather={currentWeather}/>
                                </Col> */}
                                <Col sm={3}>
                                    <HumiditySnip/>
                                </Col>
                                <Col sm={3}>
                                    <WaterSnip/>
                                </Col>
                                <Col sm={3}>
                                    <PropaSnip/>
                                </Col>
                            </Row> 
                        </Container>];
                    setrenderComponent(renderComponent);
                }

            })
            .catch(err => console.log(err));
            
    }

    function loadStaticWeather() {

        const currentWeather = {
            temp: 12,
            wind_spd: 1
        }

            if (currentWeather.temp > 0) {
                setCurrentWeather(currentWeather);
                renderComponent = [
                    <Container fluid="lg">
                        {/* to set number of columns, add sm={4} to rows */}
                        <Row>
                            {/* <CardColumns> */}
                            <Col xs={12} sm={6} md={4} lg={4} 
                                className='mt-2 mb-2'>
                                <WatchlistSnip/>
                            </Col>
                            {/* <Col xs={12} sm={6} md={4} lg={4} 
                                className='mt-2 mb-2'>
                                <HardinessSnip weather={currentWeather}/>
                            </Col> */}
                            <Col xs={12} sm={6} md={4} lg={4} 
                                className='mt-2 mb-2'>
                                <HumiditySnip/>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4} 
                                className='mt-2 mb-2'>
                                <WaterSnip/>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4} 
                                className='mt-2 mb-2'>
                                <PropaSnip/>
                            </Col>
                            {/* </CardColumns> */}
                        </Row> 
                        
                    </Container>];
                setrenderComponent(renderComponent);
            }

    }


    return (
        <div className="main-title">

            {renderComponent}

            
        </div>
 
    );
  }
  
  
  export default Home;