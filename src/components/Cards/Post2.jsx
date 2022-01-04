import React from 'react'
import { makeStyles, Typography, CardContent, Card, CardActionArea, CardMedia, CardActions, Button } from '@material-ui/core';
import Post3 from '../Assests/post3.jpg';


const useStyles = makeStyles((theme) => ({

    media:{
        height: 350,
      
        [theme.breakpoints.down("sm")]:{
            height: 150,
        }
    },

    card:{
        marginBottom: theme.spacing(3), 
    }
}))

function Post () {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={Post3} title="Architecture" />
                <CardContent>
                    <Typography gutterspace variant="h5"> Place I visited Last week </Typography>
                    <Typography variant="body2">
                    Many people think it is one of the most beautiful buildings ever built. However, 
                    it is slowly being damaged by acid rain in the nearby Yamuna Basin.
                    A nearby oil refinery has been blamed for some of the damage. In 1996, 
                    the Indian Supreme Court said that local industry was harming the Taj Mahal.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Post;
