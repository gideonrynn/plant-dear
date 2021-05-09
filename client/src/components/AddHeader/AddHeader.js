import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import window from '../../img/listwindowplants.jpg';
import propagation from '../../img/propagating.jpg';
import soil from '../../img/soily.jpg';
import './style.css'

const AddHeader = (data) => {

    const plants = data.plants;

    // console.log(plants[0].name);

    const watchlist = plants.filter(plants => { 
      return plants.status === "in progress" || plants.trouble === "Y"
    });

    const propogating = plants.filter(plants => { 
      return plants.propogating === "Y" 
    });

    // const repotted = plants.filter(plants => { 
    //   return plants.propogating === "Y" 
    // });

    // console.log(watchlist);

    // const [gallery] = useState({
    //     infinite: false,
    //     autoplay: true,
    //     bullets: true,
    //     interval: 7000,
    //     duration: 400,
    //     fullscreen: false,
    //     playbutton: true,
    //     thumbnails: false,
    //     index: false
    // })

    // const images = [
    //     {
    //       original: window,
    //     //   thumbnail: window,
    //       originalTitle: "What's on the watchlist?",
    //       description: `What's on the watchlist?\n
    //                 ${watchlist.map(watchlist => (
    //                   watchlist.name
    //                 ))}`,
    //       embedUrl: "https://www.pexels.com/search/plants/"
    //     },
    //     {
    //       original: propagation,
    //     //   thumbnail: propagation,
    //         description: `Propogating on the shelf
    //             ${propogating.map(propa => (
    //               propa.name
    //             ))}`,
    //         embedUrl: "https://sequelize.org/master/manual/model-querying-basics.html#simple-delete-queries"
    //     },
    //     {
    //       original: soil,
    //     //   thumbnail: soil,
    //         description: "Repotted plant dears",
    //         embedUrl: "https://blog.logrocket.com/guide-to-react-useeffect-hook/"
    //     },
    //   ];


    const [newStyle, setNewStyle] = useState(soil)

    function handleClick() {
      console.log("it was clicked")
      setNewStyle(window);

    }

    

    // useEffect(() => {
    //   console.log("AddHeader rendered")
    //   const interval = setInterval(() => {
    //     console.log('This will run every 8 seconds!');
    //   }, 8000);
    //   return () => clearInterval(interval);
    // },[])

    return (
       
      <div className="header-thing">
        {/* <p>Welcome</p> */}
        {/* <img src={newStyle} 
            alt="plant"
            className="plant-imgurl-0"
            onClick={handleClick}
        /> */}

        {/* <img src={window} 
            alt="plant"
            className="plant-imgurl-1"
            // onClick={handleClick}
        />
          
        <img src={propagation} 
            alt="plant"
            className="plant-imgurl-2"
            // onClick={handleClick}
        /> */}
      </div>
     
    )
}

export default AddHeader;


