
import {
  Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import { Book, Inbox } from "@material-ui/icons";
import React, { useState } from "react";
import { useStyles } from "./BodyStyles";



export default function StudentList() {
  const classes = useStyles();
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");



  return (


    <Container maxWidth="lg" className={classes.formCard}>
      <Grid container justifyContent="center">
        <Grid item md={6} xs={12}>
          <Paper>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <Typography variant="h6" className={classes.studentName}>Glenn Bluecod</Typography>
              </Grid>

              <div>
                <TextField fullWidth id="outlined-basic" label="Course Code" variant="outlined" className={classes.courseForm} />


                <TextField fullWidth id="outlined-basic" label="Course Name" variant="outlined" className={classes.courseForm} />

              </div>
              <Grid item xs={12}>
                <Grid container justifyContent="center" className={classes.courseButton}>
                  <Button fullWidth variant="contained" color="primary">
                    ADD COURSE
                  </Button>
                </Grid>
                <Grid>
                  <List className={classes.listContainer}>
                    <ListItem button className={classes.listItem}>
                      <ListItemIcon>
                        <Book />
                      </ListItemIcon>
                      <ListItemText primary="CS 203 | Database Management Systems" />
                    </ListItem>
                    <ListItem button className={classes.listItem}>
                      <ListItemIcon>
                        <Inbox />
                      </ListItemIcon>
                      <ListItemText primary="CS 404 | BC" />
                    </ListItem>
                  </List>
                </Grid>

              </Grid>




            </Grid>
          </Paper>
        </Grid>

      </Grid>




    </Container>


  );
};

