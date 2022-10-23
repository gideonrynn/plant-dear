import React from "react";
// import React, {useEffect, useState } from "react";
import { ProgressBar, Col } from "react-bootstrap"
// import { Link } from 'react-router-dom'
// import PlantLoad from "../../img/plant_loading.gif"
import "./LoadDataProgress.css";


function Progress() {

    console.log("ProgressBar component initialized with bootstrap");

    return (


            <Col>

                <h1>Loading...</h1>

                <ProgressBar variant="success" now={100} />

                {/* <img src={PlantLoad} alt="nada"/> */}

            </Col>

        
    )

}

export default Progress;