
import React from "react";
// import { Link } from 'react-router-dom'
// import "./style.css";
import { Col } from "react-bootstrap"
// import PlantAPI from "../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
// import Current from "../Current/index"
// import Hardiness from "../Hardiness/index"
import HardinessSnip from "../HardinessSnip"
import ModPlants from "../ModPlants/index"


function HomePage() {


    return (
        <>
        

            <Col>
                    <HardinessSnip/>

            </Col>

            <Col>
            
                    <ModPlantsSnip/>

            </Col>


            </>

        );

}

export default HomePage;