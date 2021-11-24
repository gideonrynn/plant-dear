// import React, {useEffect, useState } from "react";

import React from "react";
// import { Link } from 'react-router-dom'
import "./style.css";
import { ProgressBar, Col } from "react-bootstrap"
import PlantLoad from "../../img/plant_loading.gif"


function Progress() {

    console.log("ProgressBar component initialized");

    return (


            <Col>

                <h1>Loading...</h1>

                <ProgressBar variant="success" now={100} />

                <img src={PlantLoad} alt="nada"/>

            </Col>

        
    )

}

export default Progress;