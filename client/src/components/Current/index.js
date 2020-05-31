import React from "react";
// import { Link } from 'react-router-dom'
import { Table, Col } from "react-bootstrap"
import "./style.css";

function Current(cw) {

    console.log(cw);

    return (
        
        <Col className="current">

            <h3>Here's the weather</h3>

            <Table striped bordered hover>

                <thead>
                    <tr>
                        {/* <th>City</th> */}
                        <th>Current Temp</th>
                        <th>Feels Like</th>
                        <th>Wind Speed</th>
        
                    </tr>
                </thead>

                <tbody>

                        <tr key={cw.weather._id}>
                            {/* <th>{currentWeather.city_name} </th> */}
                            <th>{cw.weather.temp}&#176;</th>
                            <th>{cw.weather.app_temp}&#176;</th>
                            <th>{cw.weather.wind_spd} mph</th>
                        </tr>

                </tbody>
                
            </Table>

        </Col>
    );


}

export default Current;