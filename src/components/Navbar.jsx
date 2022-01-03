import { AppBar, Toolbar, Typography, makeStyles, InputBase, alpha, Badge, Avatar} from '@material-ui/core';
import React from 'react';
import {Mail, Notifications, Search} from '@material-ui/icons'
import profile from './Assests/profilepic.jpg'

const useStyles = makeStyles((theme)=>({ 
    
    toolbar:{
            display: "flex",
            justifyContent:"space-between",
    },
    
    logoLg:{
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display:"block",
        },
    },

    logoSm:{
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },

    search:{
        display: "flex",
        alignItems: "center",
        backgroundColor : alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25), 
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down("sm")]:{
            display:"none",
        },
    },

    input:{
        color: "white",
        marginLeft: theme.spacing(1),
    },

    icons:{
        display: "flex",
        alignItems: "center", 
    },

    badge:{
        marginRight: theme.spacing(2),
    },

    searchbtn:{
        marginRight: theme.spacing(1),
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },
    
}));


function Navbar () {
    const classes = useStyles();
    
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                 <Typography variant='h6' className={classes.logoLg}> Material UI Website </Typography>
                 <Typography variant='h6' className={classes.logoSm}> Material UI </Typography>
                 <div  className={classes.search}>
                     <Search />
                     <InputBase placeholder="Search..." className={classes.input} />
                 </div>

                 <div className={classes.icons}>
                 <Search className={classes.searchbtn} />
                 <Badge badgeContent={10} color="secondary"  className={classes.badge} >
                     <Mail />
                 </Badge>
                 <Badge badgeContent={12} color="secondary"  className={classes.badge}>
                     <Notifications />
                 </Badge>
                 <Avatar alt="Profile pic" src={profile}  />
                 </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
