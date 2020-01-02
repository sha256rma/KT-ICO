import React, { Component } from 'react';
import VerticalTabs from './MaterialUIComponents/UIverticalTabs'

class About extends Component {

  render() {
    return (
      <div>
          <div className="textAreaWhatIs flex">
            <div>
              <div className="whatIsHeader">About Me</div>
              <div>duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus  duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
              <div className="whatIsHeader">Motivation Behind KARTI (KT)</div>
              <div>aakimata sanctus est Lorem ipsum dolor sit amet.ata sanctus  duo dolores et ea rebum. Stet clita kasd gubergren, no sea taki ata sanctus  duo dolores et ea rebum. Stet clita kasd gubergren, no sea taki ata sanctus  duo dolores et ea rebum. Stet clita kasd gubergren, no sea taki</div>
              <div className="whatIsHeader">Features of KT Token</div>
              <VerticalTabs/>
            </div>
         </div>
      </div>
    );
  }
}

export default About;