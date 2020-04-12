import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';
import Points from './Points/Points';
import Error from './Error/Error';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'block'
        }
      }

    hideCookieNotification = () => {
        this.setState({style: 'none'})
    }

  render() {
  return (
    <div className="Site">

        <Header />

        <div className="container">
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Rate} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/points" component={Points} />
                        <Route exact component={Error} />
                    </Switch>
                </Router>
                

            </main>
        </div>

        <div className="container" id="cookie_info">
            <div className="site-content" style={{display: this.state.style}}>
                <div className="well">This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you.<br /> We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy. &nbsp;<button className="btn btn-primary btn-sm" onClick={this.hideCookieNotification}>OK</button></div>
            </div>
        </div>
            
        <Footer />
            
    </div>
     
  );
}
}

export default App;
