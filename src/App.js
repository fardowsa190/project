import React, { Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const particlesOption = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 300
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render(){
      return (
        <div className="App">
         <Particles className = 'particles' 
         params = {particlesOption}
         />
         <Navigation />
          <Logo />
          <Rank/>
          <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
          {/*
          <FaceRecognition />*/}
        </div>
  );
  }
}

export default App;

