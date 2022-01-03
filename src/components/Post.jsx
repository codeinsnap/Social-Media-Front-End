import React from 'react'
import { makeStyles, Typography, CardContent, Card, CardActionArea, CardMedia, CardActions, Button } from '@material-ui/core';
import  profile  from './Assests/profilepic.jpg';

const useStyles = makeStyles((theme) => ({

    media:{
        height: 350,
      
        [theme.breakpoints.down("sm")]:{
            height: 150,
        }
    },

    card:{
        marginBottom: theme.spacing(5), 
    }
}))

function Post () {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={profile} title="Contemplative Reptile" />
                <CardContent>
                    <Typography gutterspace variant="h5"> My First Post</Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur earum est
                        repudiandae aliquam neque molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur earum est
                        repudiandae aliquam neque molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur earum est
                        repudiandae aliquam neque molestiae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur earum est
                        repudiandae aliquam neque molestiae.
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
