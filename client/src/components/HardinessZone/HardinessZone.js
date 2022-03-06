import React from 'react'
import { useState, useEffect } from 'react'
import HardinessAPI from "../../utils/HardinessAPI"
import './HardinessZone.css'


function HardinessZone() {

    const [hardiness, setHardiness] = useState([]);

    useEffect(() => {
        loadHardiness();
    }, []);

    function loadHardiness() {
        HardinessAPI.getHardinessZones()
            .then(res => {
                let allData = res.data;
                console.log(allData);
                setHardiness(allData);
            })
    }

    return(
        <>
            { hardiness &&
                
                <>
                    <div>
                        <h2>Hardiness Zones</h2>
                    </div>

                    <table className="watering-table">

                        <thead className="watering-col-header">
                            <tr className="watering-col-header">
                                <th className="watering-col-header planning-sort-option" title="zone" >
                                    Zone
                                </th>
                                <th className="watering-col-header planning-sort-option" title="zone" >
                                    Range
                                </th>
                            </tr>
                        </thead>
                        <tbody className="watering-details">
                            {hardiness.map(data => (
                            <tr key={data._id}>
                                <th className="watering-details">{data.zone}</th>
                                <th className="watering-details">{data.rangeLow} to {data.rangeHigh}</th>
                            </tr>
                                ))}
                        </tbody>
                    </table>
                </>
            }
        </>
        
    )

}

export default HardinessZone;
