import React from 'react'
import { makeStyles, Container, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import Post from './Cards/Post';
import Post2 from './Cards/Post2';
import Post3 from './Cards/Post3';

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
            <Post2 />
            <Post3 />
           
        </Container>
    )
}

export default Feed;
