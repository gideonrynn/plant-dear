import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap"
import AddPlantAPI from "../../utils/PlantsAPI"
import './FormModal.css'

function FormModal(props) {

    console.log(props.show);

    return (

        <>
        {!props.show ? null 
            : <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal Thing</h4>
                    </div>
                    <div className="modal-body">
                        Here's a modal thing
                    </div>
                    <div className="modal-footer">
                        <button className="button">Close</button>
                    </div>
                </div>
            </div>
        }
      </>
    
    );

}

export default FormModal;