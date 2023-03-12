import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Modal, Container, Dropdown } from "react-bootstrap"
// import FormModal from "../FormModal/FormModal"
import AddNewPlant from "../AddNewPlant/AddNewPlant.js";
// import AddPlantsQuick from "../../components/AddPlantsQuick";
import { WeatherContext } from "../../context/WeatherContext"
import './SiteNavigation.css'
import WeatherAPI from '../../utils/WeatherAPI.js';

function SiteNavigation() {

    //to do: consider using destructuring for this
    const weather = useContext(WeatherContext);
    const currentWeather = weather.currentWeather;
    const weatherAPIStatus = weather.weatherAPIStatus;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
    
            <Navbar className="navbar-light" id="nav-highlight-pad" bg="" expand="md" role="navigation" style={{backgroundColor: '#5E635C'}}>
            <Container>
                <Navbar.Brand className="navbar-brand" id="nav-highlight" href="/">PlantDear</Navbar.Brand>
                <Dropdown id="basic-nav-dropdown be">
                    <Dropdown.Toggle className="justify-content-around" variant="success" id="dropdown-basic" style={{backgroundColor: '#5E635C', border: '#5E635C'}}>
                        Temp: {currentWeather ? currentWeather.temp + (weatherAPIStatus.current === true ?  null : " (Test)") : 0}&#176;
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Wind: {currentWeather ? currentWeather.wind_spd : 0} mph</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Hardiness Zone: 5 (-20 to -15)</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Current API Status: {weatherAPIStatus.current === true ? "On" : "Off"}</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Forecast API Status: {weatherAPIStatus.forecast === true ? "On" : "Off"}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
                <Dropdown id="basic-nav-dropdown be">
                    <Dropdown.Toggle className="justify-content-around" variant="success" id="dropdown-basic" style={{backgroundColor: '#5E635C', border: '#5E635C'}}>
                        Toggle is: {weatherAPIStatus.toggle === true ? " On": " Off"}&#176;
                    </Dropdown.Toggle>
                </Dropdown>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="">
                        <Link className="nav-link" id="nav-highlight" to="/">Home</Link>
                        <Link className="nav-link" id="nav-highlight" to="#" onClick={handleShow}>Add New Plant</Link>
                        <Link className="nav-link" id="nav-highlight" to="/plants">Plants</Link>
                        <Link className="nav-link" id="nav-highlight" to="/watering">Watering</Link>
                        <Link className="nav-link" id="nav-highlight" to="/outdoor">Outdoor</Link>
                        <Link className="nav-link" id="nav-highlight" to="/weather">Forecast</Link>
                        <Link className="nav-link" id="nav-highlight" to="/tasks">Tasks</Link>
                        <Link className="nav-link" id="nav-highlight" to="/archive">Archive</Link>
                        <Link className="nav-link" id="nav-highlight" to="/planning">Planning</Link>
                        <Link className="nav-link" id="nav-highlight" to="/editing">Editing</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>



             {/* <FormModal show={show} onHide={handleClose}></FormModal> */}
            <Modal size="lg"  show={show} onHide={handleClose}>
                <Modal.Header style={{backgroundColor: '#887FE5'}} closeButton>
                <Modal.Title>Add New Plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewPlant/>
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>

            
        </>
     
    );
}

export default SiteNavigation;