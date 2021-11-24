
import React, {useEffect, useState } from "react";
import "./style.css";
import PlantAPI from "../../../utils/PlantsAPI"
// import WeatherAPI from "../../utils/WeatherAPI"
// import { Link } from 'react-router-dom'
import ReviewPlant from "../../ReviewPlant";
import {
    Box,
    CheckBoxGroup,
    Form,
    FormField,
    Grid,
    Grommet,
    RadioButtonGroup,
    RangeInput,
    Select,
    Text,
    TextArea,
    TextInput,
    ThemeContext,
    Button,
    CheckBox
  } from 'grommet';


function WaterCalculator() {

    const [calculatorData, setCalculatorData] = useState([])
    const [result, setResult] = useState(7)

    useEffect(() => {

        if(calculatorData.type && calculatorData.temperature && calculatorData.light) {
            calculate()
        }
        
    // watch the calculatorData value, as when it meets the conditions above, can execute calculations on it
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [calculatorData])

    function handleInputChange(event) {
        let fieldName = event.target.name
        let fielddefaultValue = event.target.value
        setCalculatorData({...calculatorData, [fieldName]: fielddefaultValue})

        
        // if(calculatorData !== null) {
        //     console.log(calculatorData)
        //     calculate();
        // } 
        
    };

    function calculate() {   

            setResult(result + 3);
            console.log(calculatorData);
            console.log(result)
    }


    return (
       
        <Box fill align="center" justify="center">
            <h1>Water Frequency Calculator</h1>
            <br></br>
            <Box width="medium">
                <Form
                onChange={value => console.log('Change', value)}
                onSubmit={event => console.log('Submit', event.value, event.touched)}
                >
                
                <FormField name="type">
                    <RadioButtonGroup 
                        name="type" 
                        options={[
                            'herb',
                            'houseplant', 
                            'succulent']}
                            onChange={handleInputChange} />
                </FormField>

                <FormField name="light">
                    <RadioButtonGroup 
                        name="light" 
                        options={[
                            'low',
                            'medium', 
                            'high']}
                        onChange={handleInputChange} />
                </FormField>
                <FormField name="temperature">
                    <RadioButtonGroup 
                        name="temperature" 
                        options={[
                            'hot',
                            'average', 
                            'cool']}    
                        onChange={handleInputChange}/>
                </FormField>
                {/* <FormField label="Size" name="size">
                    <Select name="size" options={['small', 'medium', 'large']} />
                </FormField> */}

                    <Box width="medium">
                        <TextInput value={result} readOnly/>
                    </Box>
                
                {/* <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                    <Button label="Cancel" />
                    <Button type="reset" label="Reset" />
                    <Button type="submit" label="Update" primary />
                </Box> */}
                </Form>
            </Box>
        </Box>

    );

}

export default WaterCalculator;