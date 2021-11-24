import React, { useEffect, useState } from 'react'
// import { FaImages } from 'react-icons/fa';
// import { useLocation, withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import window from '../../img/listwindowplants.jpg';
import propagation from '../../img/propagating.jpg';
import soil from '../../img/soily.jpg';
import weat from '../../img/html-css-animated-weather-icons.gif';
import deskplants from '../../img/deskplants.jpeg';
import './style.css'



const HeaderAll = (data) => {

  console.log("HeaderAll component initialized");
    // const plants = data.plants;
    let location = useLocation();
    let pathname = location.pathname.slice(1);
    // let images = [window, soil, propagation];
    const [preferredBackground, setPreferredBackground] = useState(window);

    useEffect(() => {
      console.log("Header rerendered")

      if(pathname === null || pathname === "") {

        const interval = setInterval(() => {
          changeImage()
          // console.log("Change should trigger")
        }, 8000);
        return () => clearInterval(interval);

      } else {
        otherBackgrounds()
      }

    });

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
      if(pathname === 'plants') {
        setPreferredBackground(propagation)
      }

      if(pathname === 'weather') {
        setPreferredBackground(weat)
      }

      if(pathname === 'tasks') {
        setPreferredBackground(deskplants)
      }

      if(pathname === '') {
        setPreferredBackground(window)
      }

    }

    return (
       
      <div className="header-thing"
        style={{backgroundImage: `url(${preferredBackground})`}}>
        <p className="page-header">{pathname}</p>
      </div>
     
    )
}

export default HeaderAll;


