import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map';
import Menu from './menu';
import { environment } from './environment'
import GitHubIcon from '@material-ui/icons/GitHub';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapOption: 1,
      ipData: {},
      loaded: false
    };

  }
  componentDidMount() {
    document.title = "Glassix Excersize";
    fetch('https://api.ipdata.co/?api-key=' + environment.ipDataKey)
      .then(res => res.json())
      .then((data) => {
        this.setState({ ipData: data, loaded: true })
      }).catch((err) => console.log(err))
  }

  callbackMapOption = (childData) => {
    if (childData !== this.state.mapOption) {
      this.setState({ mapOption: childData });
      this.render();
    }
  }
  render() {
    const headElement = (
      <div className="Map-header">
        <h2>
          <GitHubIcon fontSize={"large"} />
          &nbsp; #GitHub ref
        </h2>
      </div>
    )
    if (this.state.loaded) {
      console.log(this.state.ipData)
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {headElement}
            <div className="map">
              <Map mode={this.state.mapOption} ipData={this.state.ipData} />
            </div>
            <Menu callback={this.callbackMapOption} />
          </header>
        </div >
      );
    }
    else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {headElement}
            <h3>Loading...</h3>
          </header>
        </div>
      )
    }
  }
}

export default App;
