import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'
import { Table, Col } from "react-bootstrap"
import "./style.css";
import WeatherAPI from "../../utils/WeatherAPI"

function Current() {

    const [currentWeather, setCurrentWeather] = useState([])

    // Load all plants and store them within setPlants
    useEffect(() => {

        loadCurrentWeather()
    
    }, [])


    function loadCurrentWeather() {

        WeatherAPI.getTodaysWeather()
            .then(res => {
                const currentWeather = res.data;
                setCurrentWeather(currentWeather);
            })
            .catch(err => console.log(err));
    }

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

                        <tr key={currentWeather.id}>
                            {/* <th>{currentWeather.city_name} </th> */}
                            <th>{currentWeather.temp}&#176;</th>
                            <th>{currentWeather.app_temp}&#176;</th>
                            <th>{currentWeather.wind_spd} mph</th>
                        </tr>

                </tbody>
                
            </Table>

        </Col>
    );


}

export default Current;