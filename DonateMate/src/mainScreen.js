import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <img class="logo" src="logo.png"/>
        <p class="title">Donate Mate</p>
      </header>

      <div class="buttonRow">
        <button id="needDevice" class="buttonMain">
          Need a device?
        </button>
        <button id="giveDevice" class="buttonMain">
          Donate or Share
        </button>
      </div>
      
      <div class="aboutUs">
        <p class="abtustxt">
          <p style={{fontSize: '3vh', color: '#D4D4D4'}}>About us
        </p>
        <br/>Donate Mate description</p>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <stat>
          <p class="bigNum">35</p>
          pick up and drop off locations across the USA
        </stat>
        <stat>
          <p class="bigNum">200{'+'}</p>
          devices recycled & reused!
        </stat>
        <stat>
          <p class="bigNum">128</p>
          devices shared by the community
        </stat>


        
      </div>
      <row>
        <row style={{margin: '0 8vh 0 8vh'}}>
          <p class="needwantto">Need to borrow?</p>
          <button class="subbuttons">Make a request</button> 
        </row>
        <row style={{margin: '0 8vh 0 8vh'}}>
          <p class="needwantto">Want to donate?</p>
          <button class="subbuttons">Plan a donation</button> 
        </row>
      </row>

      <p class="rowname">AVAILABLE DEVICES</p>
      <div>
        <row id="availableDevicesID" style={{marginBottom: '2vh'}}>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
        </row>
        <row id="availableDevicesID">
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
          <div class="devices">
            <img class="devicePic" src="phone.png"/>
            <row style={{margin: '1vh 0 0 0'}}>
              <img class="deviceIcon" src="phoneIcon.png"/>
              <p class="deviceName">Samsung Galaxy S5</p>
            </row>
          </div>
        </row>
      

      </div>
      
      <p class="rowname">LEND A DEVICE</p>


    </div>
  );
}

export default App;
