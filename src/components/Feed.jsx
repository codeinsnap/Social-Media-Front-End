import React from 'react'
import { makeStyles, Container, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import Post from './Post';


const useStyles = makeStyles((theme) => ({

    container:{
        paddingTop: theme.spacing(8),

    },
}))

function Feed () {
    const classes = useStyles();
    return (
        <Container className={classes.container}> 
            <Post />
            <Post />
            <Post />
           
        </Container>
    )
}

export default Feed;
