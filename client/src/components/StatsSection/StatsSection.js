import React, { useState } from 'react'
import { Box, Button, Card, CardHeader, CardBody, CardFooter, Grid } from 'grommet';
import window from '../../img/listwindowplants.jpg';
import propagation from '../../img/propagating.jpg';
import soil from '../../img/soily.jpg';
import './styles.css'

const StatsSection = () => {

    return (
      <Box animation="fadeIn" 
      // gap="small" 
      // width="small"
      wrap fill margin="small">
        <Grid
          rows={['auto', 'auto']}
          columns={['auto', 'auto']} 
          gap="medium" 
          align="center" 
          justify="center" alignContent="center">
      
        <Card 
          // height={{min: "200px", max: "200px"}}
          // width={{min: "200px", max: "300px"}}
          height='small'
          width='small'
          background="neutral-1"
          // align="center" 
          justify="center"
          flex
          >
          {/* <CardHeader pad="medium">Header</CardHeader> */}
          
          <CardBody 
          // pad="medium" 
          ><p className="stats">48</p></CardBody>
          <CardFooter 
          // pad={{horizontal: "small"}} 
          background="light-3">   
            <a href="/"><i>All plant dears</i></a>
          </CardFooter>
        </Card>

        <Card 
        // height="small" width="small" 
        background="neutral-2"
        height='small'
          width='small'>
          {/* <CardHeader pad="medium">Header</CardHeader> */}
          <CardBody 
          // pad="medium"
          ><p className="stats">4</p></CardBody>
          <CardFooter pad={{horizontal: "small"}} background="light-3" href="#">   
            <a href="/"><i>Watchlist</i></a>
          </CardFooter>
        </Card>

        <Card 
        // height="small" width="small" 
        background="neutral-4">
          {/* <CardHeader pad="medium">Header</CardHeader> */}
          <CardBody 
          // pad="medium" 
          className="stats">17</CardBody>
          <CardFooter pad={{horizontal: "small"}} background="light-3" href="#">   
            <a href="/"><i>Hardiness watch</i></a>
          </CardFooter>
        </Card>

        <Card 
        // height="small" width="small" 
        background="neutral-3">
          {/* <CardHeader pad="medium">Header</CardHeader> */}
          <CardBody 
          // pad="medium" 
          className="stats">12</CardBody>
          <CardFooter 
          // pad={{horizontal: "small"}} 
          background="light-3" href="#">   
            <a href="/"><i>Need a drink</i></a>
          </CardFooter>
        </Card>

        </Grid>
      </Box>

    )
}

export default StatsSection;


