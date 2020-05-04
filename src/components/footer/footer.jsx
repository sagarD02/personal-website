import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">

          <Card className="padding">
            <CardContent>
                <Typography>I OFTEN WRITE...</Typography>
                
              
              <Typography className="footer-text"><a  target="_blank" href="https://medium.com/@sagardakhore555/how-to-create-your-portfolio-website-using-react-js-material-ui-33668eae5818">
                VIEW BLOG
              </a>
              </Typography>

              </CardContent>
          </Card>
        <Card>
            <CardContent>
                <Typography >LOOK AT MY CODE, MY CODE IS AMAZING</Typography>
                <Typography className="footer-text">This Website is made with React and Material UI. Check out the code on Github.</Typography>
              
              <Typography className="footer-text"><a  target="_blank" href="https://github.com/sagarD02/personal-website">
                VIEW ON GITHUB
              </a>
              </Typography>

              </CardContent>
          </Card>

           
          
        </div>
        <FlatButton label="Back to top" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;
