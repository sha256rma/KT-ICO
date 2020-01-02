import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Player, BigPlayButton, ControlBar } from 'video-react';
import scrollToComponent from 'react-scroll-to-component';

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#23A286' }
  }
});

class Start extends Component {

  render() {
    return (
      <div>

        <div className="container">
          <div className="containerMiddle">
            <div className="header1"> Personal Coin Offering </div>
            <div className="flex">
              <div className="textArea">
                <div>
                  KARTI (KT) is an asset that represents my production time. Each KT token
                  tokenizes my productivity and is redeemable for 1 hour of consultation.
                </div>
                <div className="buttonContainer">
                <div>
                  <MuiThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>} > SIGN UP TO JOIN </Button>
                  </MuiThemeProvider>
                </div>
                </div>
              </div>

              <div className="movieContainer">
                <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" >
                  <BigPlayButton position="center" />
                   <ControlBar autoHide={false} disableCompletely={true} />
                </Player>
              </div>
            </div>

            <div className="tokenSaleContainer flex">
              <div className="tokenSaleLeftSide">
                <div className="flex space-between">
                  <div className="tokensSold">Tokens Sold: 20</div>
                  <div className="contributors">Contributers:<b> 50</b></div>
                </div>
                <div className="totalSuppy">10 <b>KT</b></div>
                <div ><Button variant="contained" color="primary" onClick={() => scrollToComponent(this.Contribute, { offset: -70, align: 'top', duration: 1500})}>BUY TOKENS</Button></div>
              </div>

              <div className="tokenSaleRightSide">
                <div className="titleTokenSale">TOKEN SALE IS LIVE</div>
                <div className="tokenSaleEnds"> TOKEN SALE ENDs IN </div>
                <div className="time flex space-around">
                  <div>
                    <div className="headerTime">23</div>
                    <div>Days</div>
                  </div>
                  <div>
                    <div className="headerTime" >12</div>
                    <div>Hours</div>
                  </div>
                  <div>
                    <div className="headerTime" >49</div>
                    <div>Min</div>
                  </div>
                  <div>
                    <div className="headerTime" >2</div>
                    <div>Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </div>

    );
  }

}

export default Start;