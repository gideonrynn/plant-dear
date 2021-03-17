import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import window from '../../img/listwindowplants.jpg';
import propagation from '../../img/propagating.jpg';
import soil from '../../img/soily.jpg';

const SliderSection = () => {

    const [gallery] = useState({
        infinite: true,
        autoplay: true,
        bullets: true,
        interval: 7000,
        duration: 400,
        fullscreen: false,
        playbutton: true,
        thumbnails: false,
        index: false
    })

    const images = [
        {
          original: window,
        //   thumbnail: window,
          originalTitle: "What's on the watchlist?",
          description: "What's on the watchlist?",
          embedUrl: "https://www.pexels.com/search/plants/"
        },
        {
          original: propagation,
        //   thumbnail: propagation,
            description: "Propagating on the shelf",
            embedUrl: "https://sequelize.org/master/manual/model-querying-basics.html#simple-delete-queries"
        },
        {
          original: soil,
        //   thumbnail: soil,
            description: "Repotted plant dears",
            embedUrl: "https://blog.logrocket.com/guide-to-react-useeffect-hook/"
        },
      ];

    return (
       
      <ImageGallery 
        items={images}
        showThumbnails={gallery.thumbnails}
        showBullets={gallery.bullets}
        showPlayButton={gallery.playbutton}
        showFullscreenButton={gallery.fullscreen}
        autoPlay={gallery.autoplay}
        slideDuration={gallery.duration}
        slideInterval={gallery.interval}
        infinite={gallery.infinite}
        showIndex={gallery.index}></ImageGallery>


    )
}

export default SliderSection


