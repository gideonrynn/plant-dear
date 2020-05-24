import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Nav() {

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-success justify-content-between" role="navigation">

            <a className="navbar-brand" href="/"> PlantDear </a>

                <div className="navbar">
                    <Link className="nav-link" to="/">Home</Link> 
                    <Link className="nav-link" to="/plants">Plants</Link>
                </div>

            </nav> 

            
        </div>
     
    );
}

export default Nav;