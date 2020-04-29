import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import ProgressComponent from './components/progress/progress';
import BrowserDetectComponent from './components/browser-detect/browser-detect';
import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import TimelineComponent from './components/timeline/timeline';
import ProgrammingComponent from './components/programming/programming';
import CodeGithubComponent from './components/code-github/code-github';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';
import LandingComponent from './components/landing/landing';
import AboutComponent from './components/about/about';
import ResponsiveDrawer from './components/drawer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
          
            <ResponsiveDrawer></ResponsiveDrawer>  
           
      </MuiThemeProvider>
    );
  }
}

export default App;