import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { formStyles } from "../BodyStyles";


const Form = ({Action, }) => {
    const classes = formStyles(); 
    return (
        <Container maxWidth="xs" className={classes.mainContainer}>
            <Paper>

                <Grid container justifyContent="center" className={classes.formContainer}>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={12} className={classes.inputFieldContainer}>
                                <TextField fullWidth id="outlined-basic" label="Email" variant="outlined">

                                </TextField>

                            </Grid>

                            <Grid item xs={ 12} className={classes.inputFieldContainer}>

                                <TextField fullWidth id="outlined-basic" label="Password" variant="outlined">

                                </TextField>

                            </Grid>

                            <Grid container justifyContent="center" className={classes.buttonContainer}>
                                <Button fullWidth variant="contained" color="primary">
                                    REGISTER
                                </Button>
                            </Grid>
                            <Grid container justifyContent="center" className={classes.baseTag}>
                                <Typography>
                                    Not registered?
                                    Login
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </Paper>
        </Container>
    );
};

export default Form; 