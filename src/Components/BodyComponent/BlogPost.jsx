// import React, { useEffect, useState } from "react";
import {
  Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography
} from "@material-ui/core";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import { GetPosts } from "../../Common/requestApi";
// import { useStyles } from "./BodyStyles";
import TextField from "@material-ui/core/TextField";
import { Book, Inbox } from "@material-ui/icons";
import React, { useState } from "react";
import { useStyles } from "./BodyStyles";

// export default function BlogPost() {
//   const classes = useStyles();
//   const [Fetched, setFetched] = useState(false);
//   const [Posts, setPosts] = useState([]);

//   //calling posts api
//   useEffect(() => {
//     !Fetched &&
//       GetPosts({ limit: 25 }).then(({ data: { data } }) => {
//         setPosts(data);
//         setFetched(true);
//         console.log("dataPost:", data);
//       });
//   }, [Fetched]);
//   return (
//     <Box mt={2}>
//       <PageHeader label='Posts' title='Blog Posts' />
//       <Grid container spacing={1}>
//         {Posts.length <= 0 ? (
//           <Typography component='p' align='center' style={{ width: "100%" }}>
//             <CircularProgress color='primary' />
//           </Typography>
//         ) : (
//           Posts.map((item, i) => (
//             <Grid
//               key={i}
//               item
//               xs={12}
//               sm={4}
//               style={{ maxWidth: "400px", margin: "10px auto" }}>
//               <Card>
//                 <CardHeader
//                   avatar={
//                     <Avatar
//                       aria-label={item.owner.firstName}
//                       src={item.owner.picture}></Avatar>
//                   }
//                   title={item.owner.firstName}
//                   // subheader={'Posted on'+ item.owner.email}
//                 />
//                 <img
//                   src={item.image}
//                   alt={item.text}
//                   className={`${classes.responsiveImg} ${classes.cardImage}`}
//                 />

//                 <CardContent>
//                   <Typography
//                     variant='body2'
//                     color='textSecondary'
//                     component='p'>
//                     {item.text}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     startIcon={<FavoriteIcon color='secondary' />}
//                     size='small'
//                     color='secondary'>
//                     {item.likes}
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))
//         )}
//       </Grid>
//     </Box>
//   );
// }


export default function BlogPost() {
  const classes = useStyles();
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => setTextValue(e.target.value);
  const handleSubmit = () => console.log(textValue);
  const handleReset = () => setTextValue("");



  return (
    // <Box mt={2}>

    // <PageHeader label='Student Details' title='XY Z' />

    <Container maxWidth="lg" className={classes.formCard}>
      <Grid container justifyContent="center">
        <Grid item md={6} xs={12}>
          <Paper>
            <Grid container justifyContent="center">
              <Grid item xs = {12}>
              <Typography variant="h6" className = {classes.studentName}>Glenn Bluecod</Typography>
              </Grid>
              
              <div>
                <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" className={classes.courseForm} />

              
                <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" className={classes.courseForm} />

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
        {/* <Grid item>
            <Paper>
              Hello
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              Hello
            </Paper>
          </Grid> */}
      </Grid>

      {/* <Grid container>
          <Paper>
           <Grid item>
           <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
             </Grid>

             <Grid item>
           <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
             </Grid>

          

            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset}>Reset</Button>
            </Paper>
          </Grid> */}



    </Container>

    // </Box>
  );
};

