import { makeStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { colors } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(2, 0),
  },
  pageLabel: {
    color: colors.baselight,
    marginBottom: theme.spacing(1),
    textTransform: "uppercase",
  },
  pageHeader: {
    color: colors.baseDark,
    marginBottom: theme.spacing(2),
    textTransform: "capitalize",
  },
  responsiveImg: {
    width: "100%",
    height: "auto",
  },
  cardImage: {
    maxHeight: "150px !important",
    overflowY: "hidden",
  },
  courseForm:
  {
   
   
  }, 
  formCard:
  {
    paddingTop: theme.spacing(10)
    
  },
  // dashboard
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2), 
    paddingRight: theme.spacing(2)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  courseButton:
  {
    
    padding: theme.spacing(2), 


  }, 
  listContainer:
  {
    maxHeight: 200, overflow: 'auto', 
    paddingTop: theme.spacing(1), 
    paddingBottom: theme.spacing(5)

  }, 
  cardContent: {
    flexGrow: 1,
  },
  cardLabel: {
    color: colors.baselight,
    margin: theme.spacing(2, 0),
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      margin: theme.spacing(1, 0),
    },
  },
  cardHeader: {
    color: colors.baseDark,
    margin: theme.spacing(2, 0),
    textTransform: "capitalize",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      margin: theme.spacing(1, 0),
    },
  },
  studentName:{
    flexGrow: 1,
 textAlign: "center", 
  paddingTop: theme.spacing(4)
  }, 
  inputContainer:
  {
    padding: theme.spacing(2)
    
  }, 
  listItem:
  {
    background: grey[100], 
    marginBottom: theme.spacing(2)
   
  }, 
  displayCard: {
    position: "relative",
    padding: "0px !important",
    minHeight: "140px",
    height: "auto",
  },
  displayCardGraph: {
    width: "100%",
    height: "60px !important",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    [theme.breakpoints.down("xs")]: {
      height: "45px !important",
    },
  },
  
  ratio: {
    position: "absolute",
    top: "50%",
    left: "33%",
    [theme.breakpoints.down("xs")]: {
      top: "45%",
      left: "25%",
    },
  },
  progressbarContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "250px",
  },
  //userOverview section
  cardTitle: {
    color: colors.baseDark,
  },
  generalGraph: {
    width: "100%",
    height: "300px",
  },

  //footer
  footer: {
    padding: "8px 24px 16px 270px",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 24px 16px 24px",
    },

  },

  pagination:
  {
    marginLeft: "20vh", 
    
    marginTop:"40vh", 
    [theme.breakpoints.down("sm")]: {
    marginLeft:"10vh", 
    marginBottom:"10vh"
    }
    
  }
}));


export const formStyles = makeStyles((theme) => ({

  formContainer:
  {
    paddingTop:theme.spacing(4)
  }, 
  mainContainer:
  {
    marginTop:"10vh"
  }, 
  inputFieldContainer:
  {
    paddingBottom:theme.spacing(2)
  }, 
  buttonContainer:
  {
    paddingTop: theme.spacing(2), 
    paddingBottom: theme.spacing(2)
  }, 
  baseTag:
  {
    paddingTop: theme.spacing(1), 
    paddingBottom: theme.spacing(2)
  }


  
}));
