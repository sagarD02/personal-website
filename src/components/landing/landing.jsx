import React, {Component} from 'react';
import './landing.css';
import Button from '@material-ui/core/Button';
import AboutComponent from './../about/about';

class LandingComponent extends Component {
    render() {
        return (

         <div>
             <div style={{backgroundColor:"#e7f0ef"}}>
               <h1>Sagar Dakhore</h1>
              <h3>Software Engineer</h3>
            
              <Button variant="contained" color="primary">
                View Portfolio
               </Button>
             <Button variant="contained" color="primary">
              View CV
             </Button>
             </div>
             <div>
               <AboutComponent></AboutComponent>
             </div>
              
       
            
          </div> 
        );
    }
}

export default LandingComponent;