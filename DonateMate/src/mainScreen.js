import './mainScreen.css';
import logo from "./images/logo.png"
import usaFlag from "./images/usa.png"
import mainImg from "./images/mainImg.png"
import React from 'react';
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
      
      <img className="mainImg" src={mainImg}/>
      
      
      <div className="aboutUs">
        <div className="abtustxt">
          <h1>About us</h1>
          <p>Donate Mate is a student-led organization that aims at reducing electronic waste and providing the underprivileged with devices. This is done by donating devices that are no longer in use, our platform not only allows you to donate devices but also allows you to lend devices for a specified amount of time. Together with DONATE MATE, we hope to create a greener environment and help others achieve their dreams!</p>
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
          <Link target={"_blank"} to={"https://forms.gle/y7QJjUBmKSo21nUL8"} className="subbuttons" >Need a device?</Link>
        </row>
        
        <row style={{margin: '0 8vh 0 8vh'}}>
          <p className="needwantto">Want to donate?</p>
          <Link target={"_blank"} to={"https://forms.gle/wrLij24iqBhx57oF9"} className="subbuttons" >Plan a donation</Link>
        </row>
      </row>

      <p className="rowname">AVAILABLE DEVICES</p>
      <div style={{width: '98vw'}}>
        <row id="availableDevicesID" style={{marginBottom: '2vh'}}>
          <div className="devices">
            <img className="devicePic" src={require("./images/phone.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/phoneIcon.png")}/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/laptop.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/laptopIcon.png")}/>
              <p className="deviceName">MacBook Air 15 2012</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/phone.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/phoneIcon.png")}/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/phone.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/phoneIcon.png")}/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/laptop.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/laptopIcon.png")}/>
              <p className="deviceName">Dell Chromebook</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/laptop.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/laptopIcon.png")}/>
              <p className="deviceName">Kindle Fire A215 Pro</p>
            </row>
          </div>
        </row>
        <row id="availableDevicesID">
          <div className="devices">
            <img className="devicePic" src={require("./images/phone.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/phoneIcon.png")}/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/phone.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/phoneIcon.png")}/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/laptop.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/laptopIcon.png")}/>
              <p className="deviceName">Dell Latitude E7273</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/phone.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/phoneIcon.png")}/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/phone.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/phoneIcon.png")}/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div className="devices">
            <img className="devicePic" src={require("./images/phone.png")}/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img className="deviceIcon" src={require("./images/phoneIcon.png")}/>
              <p className="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
        </row>
      

      </div>
      
      <p class="rowname">LEND A DEVICE</p>
      <div style={{width: '98vw'}}>
        <row>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/laptopIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/phoneIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Phone</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/laptopIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/laptopIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/phoneIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Phone</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/laptopIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
          </div>
        </row>
        <row style={{marginTop: '2vh'}}>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/phoneIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Phone</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/laptopIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/phoneIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Phone</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/laptopIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/laptopIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Laptop</p>
          </div>
          <div class="requests">
            <img className="deviceIconLend" src={require("./images/phoneIcon.png")}/>
            <p class="requesttxt">Need:</p><p class="lendname">&nbsp;Phone</p>
          </div>
        </row>
      </div>
    </div>
  );
}

export default App;
