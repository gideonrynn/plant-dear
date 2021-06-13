import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import grommet from 'grommet';
import AddPlants from "../AddPlants";
// import AddPlantsQuick from "../../components/AddPlantsQuick";
import { WeatherContext } from "../../context/WeatherContext"
import './style.css'

function Navsite() {

    const weather = useContext(WeatherContext);
    const currentWeather = weather.currentWeather;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between" role="navigation" style={{backgroundColor: '#5E635C'}}>
            
            {/* #196811 */}
            

            <a className="navbar-brand" href="/"> PlantDear </a>
                

                <div className="navbar">
                
                    <Link className="nav-link" to="#">Temp: {currentWeather ? currentWeather.app_temp : 0}&#176;</Link>
                    <Link className="nav-link" to="#">Wind: {currentWeather ? currentWeather.wind_spd : 0} mph&nbsp;&nbsp;&nbsp;</Link>
                    <Link className="nav-link" to="#">Hardiness Zone: 5 (-20 to -15) &nbsp;&nbsp;&nbsp;</Link>
                
             
                    <Link className="nav-link" to="/" >Home</Link>
                    <Link className="nav-link" to="#" onClick={handleShow}>Add New Plant</Link> 
                    <Link className="nav-link" to="/plants">Plants</Link>
                    <Link className="nav-link" to="/weather">Forecast</Link>
                    <Link className="nav-link" to="/tasks">Tasks</Link>
                </div>

            </nav> 

             
            <Modal size="lg"  show={show} onHide={handleClose}>
                <Modal.Header style={{backgroundColor: '#887FE5'}} closeButton>
                <Modal.Title>Add New Plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddPlants/>
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>

            
        </>
     
    );
}

export default Navsite;