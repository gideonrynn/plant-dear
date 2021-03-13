
import React from "react";
// import { Link } from 'react-router-dom'
// import "./style.css";
// import PlantAPI from "../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
// import Current from "../Current/index"
// import Hardiness from "../Hardiness/index"
// import HardinessSnip from "../HardinessSnip"
// import ModPlants from "../ModPlants/index"

import WatchlistSnip from "../../components/WatchlistSnip/index"
// import WeatherAPI from "../../utils/WeatherAPI"
import { Container, Row, Col, CardColumns } from "react-bootstrap"
// import Progress from "../../components/ProgressBar/index"
// import Hardiness from "../../components/Hardiness/index"
import HardinessSnip from "../../components/HardinessSnip"
import HumiditySnip from "../../components/HumiditySnip";
import WaterSnip from "../../components/WaterSnip";
import PropaSnip from "../../components/PropaSnip";


function HomeComponents(currentWeather) {

    return (
        <Container fluid="lg">
                {/* to set number of columns, add sm={4} to rows */}
                <Row>
                 {/* <CardColumns> */}
                        <Col xs={12} sm={6} md={4} lg={4} 
                                className='mt-2 mb-2'>
                                <WatchlistSnip/>
                        </Col>
                            <Col xs={12} sm={6} md={4} lg={4} 
                                className='mt-2 mb-2'>
                                <HardinessSnip weather={currentWeather}/>
                            </Col>
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
                        
        </Container>

        );

}

export default HomeComponents;