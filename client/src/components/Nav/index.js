import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap"
import AddPlants from "../../components/AddPlants";
import './style.css'

function Nav() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-success justify-content-between" role="navigation">

            <a className="navbar-brand" href="/"> PlantDear </a>

                <div className="navbar">
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