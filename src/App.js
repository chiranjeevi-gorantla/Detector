import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const partcilesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#ffffff",
        blur: 5
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
         <Particles className='particles'
            params={partcilesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
           {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
