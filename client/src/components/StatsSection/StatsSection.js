import React, { useState } from 'react'
import { Box, Button, Card, CardHeader, CardBody, CardFooter, Grid } from 'grommet';
// import window from '../../img/listwindowplants.jpg';
// import propagation from '../../img/propagating.jpg';
// import soil from '../../img/soily.jpg';
import './styles.css'

const StatsSection = () => {

    return (
      <Box animation="fadeIn" className="stats-container">
        {/* <Grid
          rows={['auto', 'auto']}
          columns={['auto', 'auto']} 
          gap="medium" 
          align="center" 
          justify="center" alignContent="center"> */}
      
        <Card className="card-container"> 
            <CardBody>
              <p className="stats">48</p>
            </CardBody>

            <CardFooter background="light-3">   
              <a href="/"><i>All plant dears</i></a>
            </CardFooter>
        </Card>

        <Card className="card-container">
          <CardBody>
            <p className="stats">4</p>
          </CardBody>
          <CardFooter background="light-3">   
            <a href="/"><i>Watchlist</i></a>
          </CardFooter>
        </Card>

        <Card className="card-container">
          <CardBody className="stats">17</CardBody>
          <CardFooter background="light-3">   
            <a href="/"><i>Hardiness watch</i></a>
          </CardFooter>
        </Card>

        <Card className="card-container">
          <CardBody className="stats">12</CardBody>
          <CardFooter background="light-3">   
            <a href="/"><i>Need a drink</i></a>
          </CardFooter>
        </Card>

        {/* </Grid> */}
      </Box>

    )
}

export default StatsSection;


