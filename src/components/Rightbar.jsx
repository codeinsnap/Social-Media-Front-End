import {
    Link,
    Avatar,
    Container,
    ImageList,
    ImageListItem,
    makeStyles,
    Typography,
    Divider,
  } from "@material-ui/core";
  import { AvatarGroup } from "@material-ui/lab";
  import boat from './Assests/boat.jpg';
  import Profile1 from './Assests/profile1.jpg';
  import Profile2 from './Assests/profile2.jpg';
  import Profile3 from './Assests/profile3.jpg';
  import Profile4 from './Assests/profile4.jpg';
  import gallery1 from './Assests/gallery1.jpg';
  import gallery2 from './Assests/gallery2.jpg';
  import gallery3 from './Assests/gallery3.jpg';




  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      position: "sticky",
      top: 0,
      
    },
    title: {
      fontSize: 16,
      fontWeight: 500,
      color: "#555",
    },
    link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16,
    },
  }));
  
  function Rightbar()  {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <Typography className={classes.title} >
          Online Friends
        </Typography>
        <AvatarGroup max={6} style={{ marginBottom: 10 }}>
          <Avatar
            alt="Remy Sharp"
            src={Profile1}
          />
          <Avatar
            alt="Travis Howard"
            src={Profile2}
          />
          <Avatar
            alt="Cindy Baker"
            src={Profile3}
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src={Profile4}
          />
          <Avatar
            alt="Trevor Henderson"
            src={Profile2}
          />
          <Avatar
            alt="Trevor Henderson"
            src=""
          />
        </AvatarGroup>
        <Typography className={classes.title} >
          Gallery
        </Typography>
        <ImageList rowHeight={70} style={{ marginBottom: 15 }} cols={2}>
          <ImageListItem>
            <img
              src={boat}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={gallery1}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={gallery2}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={gallery3}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={Profile3}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src=""
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography className={classes.title} >
          Categories
        </Typography>
        <Link  className={classes.link} variant="body2">
          Sport
        </Link>
        <Link  className={classes.link} variant="body2">
          Food
        </Link>
        <Link  className={classes.link} variant="body2">
          Music
        </Link>
        <Divider flexItem style={{marginBottom:2}} />

        <Link  className={classes.link} variant="body2">
          Movies
        </Link>
        <Link  className={classes.link} variant="body2">
          Science
        </Link>
        <Link className={classes.link} variant="body2">
          Life
        </Link>
      </Container>
    );
  };
  
  export default Rightbar;