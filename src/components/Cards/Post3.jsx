import React from 'react'
import { makeStyles, Typography, CardContent, Card, CardActionArea, CardMedia, CardActions, Button } from '@material-ui/core';
import Post4 from '../Assests/post4.jpg';

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
                <CardMedia className={classes.media} image={Post4} title="Nature" />
                <CardContent>
                    <Typography gutterspace variant="h5"> Dream to visit </Typography>
                    <Typography variant="body2">
                    "In every wood in every spring there is a different green."
                    Green is the fresh emblem of well-founded hopes. In blue, the spirit can wander, but in green, it can rest.
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
