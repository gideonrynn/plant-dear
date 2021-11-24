import React, { useEffect, useState } from "react";
// import AddPlantAPI from "../../utils/PlantsAPI"
import './FormModal.css'

function FormModal(props) {

    console.log("FormModal component initialized");
    const [show, setShow] = useState(false);

    // console.log(props.show);

    useEffect(() => {

        if (props.show === true) {
            handleShow();
        }
        // right now, none of the sorted 
        // loadSortedPlants()
        // console.log("Modal triggered")
        
    }, [props])


    function handleClose() {
        // console.log("Modal close clicked")
        setShow(false);
    };

    function handleShow() {
        setShow(true)
    };

    return (

        <>
        {!show ? null 
            : <div className="modal-plant">
                <div className="modal-plant-wrapper">
                    <div className="modal-plant-content">
                        <div className="modal-plant-header">
                            <h4 className="modal-plant-title">Modal Thing</h4>
                        </div>
                        <div className="modal-plant-body">
                            Here's a modal thing
                        </div>
                        <div className="modal-plant-footer">
                            <button className="button modal-plant-close" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        }
      </>
    
    );

}

export default FormModal;