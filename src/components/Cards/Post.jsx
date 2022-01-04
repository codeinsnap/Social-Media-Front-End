import React from 'react'
import { makeStyles, Typography, CardContent, Card, CardActionArea, CardMedia, CardActions, Button } from '@material-ui/core';
import Holi1 from '../Assests/Holi1.jpg';

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
                <CardMedia className={classes.media} image={Holi1} title="Festival" />
                <CardContent>
                    <Typography gutterspace variant="h5"> Colors of Life </Typography>
                    <Typography variant="body2">
                    The Holi Festival of Colors in India is a celebration of the victory of good over evil, 
                    the destruction of the demoness Holika. It is celebrated every year on the day after the full moon 
                    in the Hindu month of Phalguna which is early March. 
                    People celebrate the start of spring and other events in the Hindu religion; 
                    Celebrate the Holi Colors festival in India with our very own Trips To India!
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
