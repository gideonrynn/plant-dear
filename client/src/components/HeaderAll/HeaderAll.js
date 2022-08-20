import React, { useEffect, useState } from 'react'
// import { FaImages } from 'react-icons/fa';
// import { useLocation, withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import window from '../../img/listwindowplants.jpg';
import propagation from '../../img/propagating.jpg';
import soil from '../../img/soily.jpg';
import weat from '../../img/html-css-animated-weather-icons.gif';
import deskplants from '../../img/deskplants.jpeg';
import './HeaderAll.css'

const HeaderAll = (data) => {

  console.log("HeaderAll component initialized");
    // const plants = data.plants;
    let { pathname, state } = useLocation();
    let pathName = pathname.slice(1);
    let name = state ? state.name : null;
    const [preferredBackground, setPreferredBackground] = useState(window);
    let allPaths = ['plants', 'addnewplants', 'archive', 'editing', 'outdoor', 'planning', 'tasks', 'watering', 'weather']

    console.log("Path names on the header page", pathname, "pathName", pathName)

    useEffect(() => {
      console.log("Header rerendered")

      if(pathName === null || pathName === "") {

        const interval = setInterval(() => {
          changeImage()
          // console.log("Change should trigger")
        }, 8000);
        return () => clearInterval(interval);

      } else {

        otherBackgrounds()
      }

    });

    const getPlantName = () => {
      if(name) {
        return name
      }
    }

    const changeImage = () => {
      if(preferredBackground === window) {
        setPreferredBackground(propagation);
      } else if(preferredBackground === propagation) {
        setPreferredBackground(soil)
      } else {
        setPreferredBackground(window)
      }
    }

    const otherBackgrounds = () => {
      if(pathName === 'plants') {
        setPreferredBackground(propagation)
      }

      if(pathName === 'weather') {
        setPreferredBackground(weat)
      }

      if(pathName === 'tasks') {
        setPreferredBackground(deskplants)
      }

      if(pathName !== 'plants' && pathName !== 'weather' && pathName !== 'tasks') {
        setPreferredBackground(window)
      }

    }

    return (
      <>
        {pathName === null || pathName === "" ?
            <div 
              className="header-main"
              style={{backgroundImage: `url(${preferredBackground})`}}
            >
              <p className="page-header">{pathName}</p>
            </div>
        : !allPaths.includes(pathName) && getPlantName() ? 
            <div 
              className="header-sub"
              style={{backgroundImage: `url(${preferredBackground})`}}
            >
                <p className="page-header">{getPlantName()}</p>
            </div>
        : pathName !== null && pathName !== "" && pathName !== "plantdetails" ?
            <div 
              className="header-sub"
              style={{backgroundImage: `url(${preferredBackground})`}}>
                <p className="page-header">{pathName}</p>
            </div> 
        : null }
      </>
     
    )
}

export default HeaderAll;


