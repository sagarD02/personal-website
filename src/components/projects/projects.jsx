import React from 'react';
import './projects.css'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
   paddingTop:10,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));


export default function ProjectsComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <div className="container">
                <h2 className="sub-heading">Projects <span className="title">Summary</span> <Divider variant="middle" /> </h2>
            
        </div>
        <Grid container spacing={3}>
            <Grid item xs={12}>

         <Card> 
           <CardContent>
              <h2>Westpac Bank</h2>
           
                <Typography>My major part of the work has been into the field of creating responsive design and developed a responsive website that could be served to Desktop, Tablets and Mobile users, also maintained the state through Redux, creating common components. Wrote unit test cases by using Jest.</Typography>
               
            </CardContent>
          </Card>
       </Grid>
        
      </Grid>

      <Grid container spacing={3}>
            <Grid item xs={12}>

         <Card> 
           <CardContent>
              <h2>Qurrah Web Portal</h2>
                 
                <Typography>My main role was collect and analyze technical requirements, Web-service Integration and Data Handling, Implemented Routing and Navigation Drawer, Automation (build generation using Jenkins)</Typography>
                
            </CardContent>
          </Card>
       </Grid>
        
      </Grid>

      <Grid container spacing={3}>
            <Grid item xs={12}>

         <Card> 
           <CardContent>
              <h2>Takamol Childcare Application</h2>
                
                <Typography>My major part of the work has been design and develop modules based on technical specifications,creating input forms, event handling, creating controlled and uncontrolled components.</Typography>
                   
            </CardContent>
          </Card>
       </Grid>
        
      </Grid>

      <Grid container spacing={3}>
            <Grid item xs={12}>

         <Card> 
           <CardContent>
              <h2>SBI Mingle</h2>
               
                 <Typography>I mostly worked on development of UI from wireframes/visual design, creating responsive grid,theming , followed best practices and coding standards.</Typography>
                    
            </CardContent>
          </Card>
       </Grid>
        
      </Grid>

      
      
    </div>
  );
}