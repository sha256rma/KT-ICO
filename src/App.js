import React, { Component } from 'react';
import './css/App.css';
import Button from '@material-ui/core/Button';
import Start from './components/Start';
import About from './components/About';
import Resume from './components/Resume';
import Contribute from './components/Contribute';
import Projects from './components/Projects';
import scrollToComponent from 'react-scroll-to-component';
import web3 from './web3';

class App extends Component {

  render() {

    console.log("Web3 version:", web3.version);

    return (
      <div>
        <nav>

          <a href="/" className="titleICO">
            <i className="material-icons">turned_in_not</i>
            <div>K A R T I</div>
          </a>

          <div className="middleNav">
            <Button style={{ color: '#FFFFFF' }} onClick={() => scrollToComponent(this.About, { offset: -70, align: 'top', duration: 1500})}>About</Button>
            <Button style={{ color: '#FFFFFF' }} onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}>Contribute</Button>
            <Button style={{ color: '#FFFFFF' }} onClick={() => scrollToComponent(this.Resume, { offset: -70, align: 'top', duration: 1500})}>Resume</Button>
            <Button style={{ color: '#FFFFFF' }} onClick={() => scrollToComponent(this.Projects, { offset: -70, align: 'top', duration: 1500})}>Projects</Button>
          </div>

          <div className="rightNav">
            <i className="material-icons">account_balance_wallet</i>

            <div className="myAccountBox">
              <div className="address"> Address: 0x47d8e19Ab54CED9d4Afc7C5519C6481C3D893d8d </div>
              <div className="eth"> ETH: 12 </div>
              <div className="dctoken"> My KT: 1223 </div>
            </div>
          </div>

        </nav>

        <div id="startDiv"> <Start/> </div>
        <div ref={(section) => { this.About = section; }}><About/></div>
        <div ref={(section) => { this.Contribute = section; }}> <Contribute/> </div>
        <div ref={(section) => { this.Resume = section; }}> <Resume/> </div>
        <div ref={(section) => { this.Projects = section; }}> <Projects/> </div>

      </div>
    );
  }
}

export default App;