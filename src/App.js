import { Grid, makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Navbar from './components/Navbar'
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Add from "./components/Add";

const useStyles = makeStyles((theme)=> ({
  right: {
    [theme.breakpoints.down("sm")]:{
      display: "none",
    }
  }
}));

function App() {
  const classes = useStyles()
  return (
    <div >
      <Navbar />
      <Grid container> 
      <Grid item sm={2} xs={2}>
        <Leftbar />
      </Grid>
      <Grid item sm={7} xs={10}>
        <Feed />
      </Grid>
      <Grid item sm={3} className={classes.right}>
        <Rightbar />
      </Grid>
      </Grid>
      <Add />
    </div>
  )
};

export default App;
