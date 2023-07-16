import './mainScreen.css';
import logo from "./images/logo.png"
import usaFlag from "./images/usa.png"
import mainImg from "./images/mainImg.png"
import React, {useState} from 'react';
import YoutubeEmbed from './youtubeEmbed';
import { Link } from 'react-router-dom';
function App() {


  return (
    
    <div className="App">

      <header>
        <div className='flag-div'>
          <img className="usFlag" alt='US flag' src={usaFlag} />
        </div>
        <img className="logo"  alt="donation box" src={logo}/>
      </header>

      <div className="buttonRow">
        <Link target={"_blank"} to={"https://forms.gle/y7QJjUBmKSo21nUL8"} id="needDevice" className="buttonMain" >
          Need a device?
        </Link>
        <Link target={"_blank"} to={"https://forms.gle/wrLij24iqBhx57oF9"} id="giveDevice" className="buttonMain" >
          Donate or Share
        </Link>
      </div>


      <div className='mainImg-div'>
        <img className="mainImg" src={mainImg}/>
      </div>
      
      <div className="aboutUs">
        <div className="abtustxt">
          <h1>About us</h1>
          <p>DLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae maximus ligula, pretium semper erat. Quisque fringilla augue vitae tincidunt bibendum. Vivamus finibus ante tincidunt, mollis nibh vel, rutrum leo.</p>
        </div>
      </div>


      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <stat>
          <p className="bigNum">89</p>
          pick up and drop off locations across the USA
        </stat>
        <stat>
          <p className="bigNum">400{'+'}</p>
          devices recycled & reused!
        </stat>
        <stat>
          <p className="bigNum">650{"+"}</p>
          devices shared by the community
        </stat>

      
        
      </div>
      <div className='video-div'>
        <YoutubeEmbed embedId='eyUqqA8wA0A' />

      </div>
      <row>
        <row style={{margin: '0 8vh 0 8vh'}}>
          <p className="needwantto">Need to borrow?</p>
          <Link target={"_blank"} to={"https://forms.gle/y7QJjUBmKSo21nUL8"} className="subbuttons" >Make a request</Link> 
        </row>
        <row style={{margin: '0 8vh 0 8vh'}}>
          <p className="needwantto">Want to donate?</p>
          <Link target={"_blank"} to={"https://forms.gle/wrLij24iqBhx57oF9"} className="subbuttons" >Plan a donation</Link> 
        </row>
      </row>

      <p className="rowname">AVAILABLE DEVICES</p>
      <div>
        <row id="availableDevicesID" style={{marginBottom: '2vh'}}>
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
        </row>
        <row id="availableDevicesID">
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" alt ="phone" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" alt='phone' src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" alt="phone" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" alt="phone" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" alt="phone" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" alt="phone" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src="phoneIcon.png"/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
        </row>
      

      </div>
      
      <p class="rowname">LEND A DEVICE</p>
      <row>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
      </row>
      <row style={{marginTop: '2vh'}}>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
        <div class="requests">
          <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
        </div>
      </row>


    </div>
  );
}

export default App;
