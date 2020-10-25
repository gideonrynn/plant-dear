import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import AddPlants from "../../components/AddPlants";
import WeatherAPI from "../../utils/WeatherAPI"
import './style.css'

function Nav() {

    const [currentWeather, setCurrentWeather] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {

        loadStaticWeather()
    
    }, [])

    
    function loadCurrentWeather() {

        WeatherAPI.getTodaysWeather()
        
            .then(res => {

                const currentWeather = res.data;
                if (currentWeather.temp > 0) {
                    setCurrentWeather(currentWeather);
                }

            })
            .catch(err => console.log(err));
            
    }

    function loadStaticWeather() {

        const currentWeather = {
            temp: 45,
            wind_spd: 45
        }

        if (currentWeather.temp > 0) {
            setCurrentWeather(currentWeather);
        }
    }

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-between" role="navigation" style={{backgroundColor: '#2E8C43'}}>
            
            

            <a className="navbar-brand" href="/"> PlantDear </a>
                

                <div className="navbar">

                
                    <Link className="nav-link" to="#">Temp: {currentWeather.temp}&#176;</Link>
                    {/* <p>{currentWeather.app_temp}&#176;</p><br/><br/> */}
                    <Link className="nav-link" to="#">Wind: {currentWeather.wind_spd} mph&nbsp;&nbsp;&nbsp;</Link>
                
             
                    <Link className="nav-link" to="/" >Home</Link>
                    <Link className="nav-link" onClick={handleShow}>Add New Plant</Link> 
                    {/* <Link className="nav-link" to="/addnewplants" onClick={handleShow}>Add New Plant</Link>  */}
                    <Link className="nav-link" to="/plants">Plants</Link>
                    <Link className="nav-link" to="/weather">Forecast</Link>
                </div>

            </nav> 

            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddPlants/>
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>

            
        </div>
     
    );
}

export default Nav;