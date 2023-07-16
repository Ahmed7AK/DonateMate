import './mainScreen.css';
import logo from "./images/logo.png"
import usaFlag from "./images/usa.png"
import mainImg from "./images/mainImg.png"
import React from 'react';
import YoutubeEmbed from './youtubeEmbed';

function App() {
  const [isOpenR, setIsOpenR] = useState(false);
  const RequestForm = ({ setIsOpenR }) => {
   return (
      <>
      <div class="form">
        <row>
          <img class="formlogo" src="logo.png"/>
          <p class="formlogoname">Donate Mate</p>
        </row>
        
        <input class="emailtxt" type='email' placeholder='Enter email address'/>
        <p class="bigLet" style={{marginTop: '3vh'}}>What do you need?</p>
        <row>
          <button class="needDevices">Phone</button>
          <button class="needDevices">Laptop</button>
          <button class="needDevices" style={{color: '#4d4d4d', borderStyle: 'solid', borderColor: '#a1a1a1'}}>Other</button>
        </row>
        <p class="bigLet" style={{marginTop: '2vh'}}>Where?</p>
        <select class="dropdown">
          <option>Select a pick-up location</option>
          <option>123 Address Dr</option>
          <option>321 Address Dr</option>
          <option>132 Address Dr</option>
          <option>312 Address Dr</option>
        </select>
        <p class="bigLet" style={{marginTop: '2vh', marginBottom: '2vh'}}>Why?</p>
        <input class="situcond" type="text" placeholder='Describe your situation (What is the device for?)'/>
        <row style={{marginTop: '1.5vh'}}>
          <button class="back" onClick={() => setIsOpenR(false)}>Back</button>
          <button class="submit" onClick={() => setIsOpenR(false)}>Submit</button>
        </row>
      </div>
      </>
    );
  };
  const [isOpenD, setIsOpenD] = useState(false);
  const DonateForm = ({ setIsOpenD }) => {
    return (
      <>
      <div class="form">
        <row>
          <img class="formlogo" src="logo.png"/>
          <p class="formlogoname">Donate Mate</p>
        </row>
        <input class="emailtxt" type='email' placeholder='Enter email address'/>
        <p class="bigLet" style={{marginTop: '3vh'}}>What do you have?</p>
        <row>
          <button class="needDevices">Phone</button>
          <button class="needDevices">Laptop</button>
          <button class="needDevices" style={{color: '#4d4d4d'}}>Other</button>
        </row>
        <p class="bigLet" style={{marginTop: '2vh'}}>Where?</p>
        <select class="dropdown">
          <option>Select a drop-off location</option>
          <option>123 Address Dr</option>
          <option>321 Address Dr</option>
          <option>132 Address Dr</option>
          <option>312 Address Dr</option>
        </select>
        <p class="bigLet" style={{marginTop: '2vh', marginBottom: '2vh'}}>Condition</p>
        <input class="situcond" type="text" placeholder='Describe device condition (Is there any damage?)'/>
        <row style={{marginTop: '1.5vh'}}>
          <button class="back" onClick={() => setIsOpenD(false)}>Back</button>
          <button class="submit" onClick={() => setIsOpenD(false)}>Submit</button>
        </row>
      </div>
      </>
    );
  };

  return (
    
    <div className="App">

      <header>
        <div className='flag-div'>
          <img className="usFlag" alt='US flag' src={usaFlag} />
        </div>
        <img className="logo"  alt="donation box" src={logo}/>
      </header>

      <div className="buttonRow">
        <button id="needDevice" className="buttonMain" onClick={() => setIsOpenR(true)}>
          Need a device?
        </button>
        <button id="giveDevice" className="buttonMain" onClick={() => setIsOpenD(true)}>
          Donate or Share
        </button>
      </div>
        {isOpenR && <RequestForm setIsOpenR={setIsOpenR}/>}
        {isOpenD && <DonateForm setIsOpenD={setIsOpenD}/>}

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
          <button className="subbuttons" onClick={() => setIsOpenR(true)}>Make a request</button> 
        </row>
        <row style={{margin: '0 8vh 0 8vh'}}>
          <p className="needwantto">Want to donate?</p>
          <button className="subbuttons" onClick={() => setIsOpenD(true)}>Plan a donation</button> 
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

      {isOpenR && <RequestForm setIsOpenR={setIsOpenR}/>}
      {isOpenD && <DonateForm setIsOpenD={setIsOpenD}/>}
    </div>
  );
}

export default App;
