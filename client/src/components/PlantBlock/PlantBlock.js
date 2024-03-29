import React from "react";
import { useNavigate } from "react-router-dom";
// import PlantAPI from "../../utils/PlantsAPI"
import Plantling from "../../img/plantling.jpg"
import "./PlantBlock.css";

/* Description: Currently a group of plants mapped in a certain template. In use by the sorting page that contains all of the active plants.
Proposed future state: individual plant that data is passed into
*/
const PlantBlock = (data) => {

    console.log("PlantBlock component initialized");
    // const [onePlantId, setOnePlantId] = useState([]);
    // const [onePlant, setOnePlant] = useState([]);

    const plants = data.plants;
    const navigate = useNavigate();

    let currentDate = new Date();

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    function handleClick(event, name) {
        event.preventDefault();
        // console.log("clicked", event.target.id);
        // console.log(name);

        // let newTitle = "plant";
        // let setPathname = name.toLowerCase().replace(/\s/g, "-").replace(/['()]/g, "");
        
        // console.log(id);
        navigate("/plantdetails",
            // pathname: `${newTitle}/${setPathname}`,
            // pathname: `plant/${setPathname}`,
            {state: { detail: event.target.id,
                    name: name }});
    }

    // const plantsByDate = plants.sort((a,b) => {
    //     if (a.createdAt > b.createdAt) return -1;
    //     if (a.createdAt < b.createdAt) return 1;
    //     return 0;
    // })

    const plantsByName = plants.sort((a,b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })

    // handle modal
    // const [setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // function getPlant(id) {

    //     // console.log("this was clicked")
    //     setOnePlantId(id)
    //              PlantAPI.getOnePlant(id)
    //                  .then(res => {
    //                      console.log(onePlant)
    //                      setOnePlant(res.data)
                         
    //                      handleShow()
    //                          // .then(res => {
    //                          //     
    //                          // })
                             
    //                  // const plants = res.data;
    //                  // setPlants(plants);
    //              })
    //              .catch(err => console.log(err))
    //  }


    
    // const uniquePlants = [...new Set(plantsByDate.map(data => data.name))]
    
    // console.log(uniquePlants);
    // const mostRecent = plantsByDate.slice(0, 12);
    // const nextRecentFive = plantsByDate.slice(1, 14);
    // console.log(mostRecent, nextRecentFive);

    return (
        <>
            <div className="plant-card-section">

                <div className="plant-card-plant">
                    {plantsByName.map(plants => (
                        <>
                        <div className="plant-card-wrapper">
                            <div key={plants._id} className="plant-card-img">
                                <img src={plants.imgURL ? `/img/${plants.imgURL}` : Plantling} alt="plant dear" className="plant-img-block"  />
                                <p className="plant-title-img">{plants.name}</p>
                            </div>
                            <div key={plants._id+1} id={plants._id} className="plant-card-img-overlay" onClick={(e) => handleClick(e, plants.name)}>
                                <p id={plants._id}>{plants.name}</p>
                                <p id={plants._id}>{plants.sunlight ? plants.sunlight + " light" : ""}</p>
                                <p id={plants._id}>{plants.lastWatered && plants.lastWatered.length > 0 ? Math.floor((currentDate.getTime() - new Date(plants.lastWatered[plants.lastWatered.length - 1]).getTime())/ oneDay) + " day(s) ago" : "not yet watered"}</p>
                                <p id={plants._id}>{plants.waterPref} watering conditions</p>
                                {/* <button className="plant-card-2-btn">Open plant</button> */}
                            </div>
                        </div>
                        </>
                    ))}
                    
                </div>
                
            </div>



            {/* <FormModal show={show}> */}
                {/* <Modal.Header style={{backgroundColor: '#887FE5'}} closeButton> */}
                    {/* <Modal.Title>{onePlant.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body> */}
                    {/* <ReviewPlant onePlant={onePlant} id={onePlantId}/> */}
                {/* </Modal.Body>
                <Modal.Footer>
                            
                </Modal.Footer> */}
            {/* </FormModal>    */}
        </>
    )
};

export default PlantBlock;
