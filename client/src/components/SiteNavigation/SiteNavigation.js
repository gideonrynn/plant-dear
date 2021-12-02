import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Modal, Container, Dropdown } from "react-bootstrap"
// import FormModal from "../FormModal/FormModal"
import AddNewPlant from "../AddNewPlant/AddNewPlant.js";
// import AddPlantsQuick from "../../components/AddPlantsQuick";
import { WeatherContext } from "../../context/WeatherContext"
import './SiteNavigation.css'

function SiteNavigation() {

    const weather = useContext(WeatherContext);
    const currentWeather = weather.currentWeather;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
    
                
           


            <Navbar className="navbar-light" id="nav-highlight-pad" bg="" expand="md" role="navigation" style={{backgroundColor: '#5E635C'}}>
            <Container>
                <Navbar.Brand className="navbar-brand" id="nav-highlight" href="/">PlantDear</Navbar.Brand>
                    {/* <Link className="nav-link" to="#">Temp: {currentWeather ? currentWeather.app_temp : 0}&#176;</Link>
                    <Link className="nav-link" to="#">Wind: {currentWeather ? currentWeather.wind_spd : 0} mph&nbsp;&nbsp;&nbsp;</Link>
                    <Link className="nav-link" to="#">Hardiness Zone: 5 (-20 to -15) &nbsp;&nbsp;&nbsp;</Link>  */}
                {/* <Navbar.Text className="justify-content-center" id="nav-temp-highlight"><br/></Navbar.Text> */}
                <Dropdown id="basic-nav-dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: '#5E635C', border: '#5E635C'}}>
                        Temp: {currentWeather ? currentWeather.app_temp : 0}&#176;
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Wind: {currentWeather ? currentWeather.wind_spd : 0} mph</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Hardiness Zone: 5 (-20 to -15)</Dropdown.Item>
                    </Dropdown.Menu>
                    {/* <NavDropdown.Item >Wind: {currentWeather ? currentWeather.wind_spd : 0} mph&nbsp;&nbsp;&nbsp;</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </Dropdown> 
                {/* <Navbar.Text className="justify-content-center" id="nav-temp-highlight">
                    Temp: {currentWeather ? currentWeather.app_temp : 0}&#176;<br/>
                    Wind: {currentWeather ? currentWeather.wind_spd : 0} mph&nbsp;&nbsp;&nbsp;<br/>
                    Hardiness Zone: 5 (-20 to -15) &nbsp;&nbsp;&nbsp;
                </Navbar.Text> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="">
                        <Link className="nav-link" id="nav-highlight" to="/">Home</Link>
                        <Link className="nav-link" id="nav-highlight" to="#" onClick={handleShow}>Add New Plant</Link>
                        <Link className="nav-link" id="nav-highlight" to="/sorting">Plants</Link>
                        <Link className="nav-link" id="nav-highlight" to="/watering">Watering</Link>
                        <Link className="nav-link" id="nav-highlight" to="/weather">Forecast</Link>
                        <Link className="nav-link" id="nav-highlight" to="/tasks">Tasks</Link>
                        {/* <Link className="nav-link" to="/plants">Plants</Link> */}
                        {/* <Link className="nav-link" to="/plantonly">PlantOnly</Link> */}
                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
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