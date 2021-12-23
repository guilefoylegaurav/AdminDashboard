import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  CardMedia, 
  CardActions, 
  Container, 
  Typography,
  
} from "@material-ui/core";

import { useStyles } from "../BodyStyles";

import Pagination from '@material-ui/lab/Pagination';
import { NavLink } from "react-router-dom";
const Dashboard = () => 
{
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Student Name
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" component = {NavLink} to = "/details">
                      View
                    </Button>
                    
                  </CardActions>
                </Card>
                
              </Grid>

           

           
           


      </Grid>
      <Grid item xs = {12} justifyContent="center">
         <div className={classes.pagination}>
           <Pagination count={10} />
         </div>
      </Grid>
      
      
    </Container>
  ); 

}

export default Dashboard; 