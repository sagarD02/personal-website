import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
const scrollTo = require('scroll-to');
import './header.css';
import MaterialIcon from 'material-icons-react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
      <div className="header-wrapper" style={{"height": this.state.height}}>
            <div className="header">
                <h3>Sagar Dakhore</h3>
                <h6>Senior Software Engineer</h6>
                <div>
                  <ul>
                    <li className="list-center"><MaterialIcon icon="email" color='#fff'/> sagardakhore555@gmail.com</li>
                  <br/>
                   <li className="list-center"><MaterialIcon icon="call" color='#fff' />918779667638</li>
                   </ul>
                </div>
            </div>
            <div className="scroll-down-btn">
              <FloatingActionButton mini={true} backgroundColor="#A80202" onClick={this.onScrollToIntro.bind(this)}>
                <ArrowIcon />
              </FloatingActionButton>
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
