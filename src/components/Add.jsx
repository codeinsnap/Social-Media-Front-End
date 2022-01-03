import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles,  MenuItem, Snackbar, Modal,  Radio,  RadioGroup,  TextField,  Tooltip } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import MuiAlert from "@material-ui/lab/Alert";


const useStyles = makeStyles((theme)=>({

    fab:{
        position: "fixed",
        right: 60,
        bottom: 25,
        
    },
    container:{
        width: 500,
        height: 500,
        backgroundColor: 'white',
        positon: "absolute",
        top:0,
        bottom: 0,
        left:0,
        right:0,
        marign:'auto',
        [theme.breakpoints.down("sm")]:{
            widht:"100vw",
            height:"100vh"
        },
    },

    form:{
        padding: theme.spacing(2),
    },

    item:{
        marginBottom: theme.spacing(3),
    }

}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

function Add ()  {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpenAlert(false);
    };
    return (
        <>
            <Tooltip title="Add" aria-labelledb="add" onClick={()=> setOpen(true)}>
                <Fab color= "primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open ={open}>
                <Container className={classes.container}> 
                <form className={classes.item}>
                    <div className={classes.item} >
                        <TextField id="standard-basic" label="Title" size="small" style={{width:"100%"}}/>
                    </div>
                    <div className={classes.item} >
                        <TextField id="outlined-multiline-static" 
                        label="Multiline" multiline
                        rows={4}
                        defaultValue="Tell Your Story"
                        variant="outlined"
                        label= "Description" size="small" style={{width:"100%"}}/>
                    </div>

                    <div className={classes.item} >
                        <TextField select label="Visibility" value="Public">
                            <MenuItem vlaue= "Public" > Public </MenuItem>
                            <MenuItem vlaue= "Private" > Private </MenuItem>
                            <MenuItem vlaue= "Unlisted" > Unlisted </MenuItem>
                        </TextField> 
                        
                    </div>

                    <div className={classes.item}>
                    <FormLabel component="legend">Who Can Comment ?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel
                                value="Everybody"
                                control={<Radio size="Small"/>}
                                label="Everybody" />

                            <FormControlLabel
                                value="My Friends"
                                control={<Radio size="Small" />}
                                label="My Friends" />

                            <FormControlLabel
                                value="No Body"
                                control={<Radio size="Small"/>}
                                label="No Body" />

                            <FormControlLabel
                                value='Custom'
                                disabled
                                control={<Radio size="Small"/>}
                                label='Custom(Premium)' />
                        </RadioGroup>
                    </div>

                    <div className={classes.item}>
                        <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginRight: 20 }}
                        onClick={() => setOpenAlert(true)}
                        >
                        Create
                        </Button>

                        <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={()=> setOpen(false)}>
                        Cancle
                        </Button>  
                    </div>

                </form>
                </Container>
            </Modal>
            <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
        </>
    )
} 

export default Add
