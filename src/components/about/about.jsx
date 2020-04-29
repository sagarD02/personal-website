import React from 'react';
import './about.css';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ProgrammingComponent from '../programming/programming';
import VerticalLinearStepper from '../stepper';
import Button from '@material-ui/core/Button';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Certifications from '../certifications';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
  root: {
    padding:20,
    backgroundColor:'#e9e9e9'
  },
 
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  brand:{
    color:'#fd7070',
    fontWeight:400,
  },
  pos: {
    marginBottom: 12,
  },
  padding:{
    padding:20,
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
} 


export default function AboutComponent () {
   
        const classes = useStyles();
   return (
    <div>

            <div className={classes.root}>
              <Card>
                <CardContent>
                    <h2>Hello, I'm <span className={classes.brand}>Sagar Dakhore</span></h2>
                  
                  <Typography className={classes.pos} color="textSecondary">
                    I am Software Developer from Pune. I have graduated with a Master degree, from University of Pune. I have 4+ years of experience of building and maintaining Websites, Mobile Applications. I love Javascript, React, Redux, Html, CSS, Bootstrap.
                  </Typography>
                  
                  
                </CardContent>
                <CardActions>
                <Button variant="outlined">View CV</Button>

                </CardActions>
              </Card>              
            </div>
            <div className={classes.padding}>
               
                  <ProgrammingComponent></ProgrammingComponent>
                  <VerticalLinearStepper></VerticalLinearStepper>
                  <Certifications></Certifications>
            </div>
    
        </div>
              
            
        );
    
}
