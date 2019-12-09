import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map';
import Menu from './menu';
import { environment } from './environment'
import Header from './header'
import { firebase } from './firebase'
import { connect } from 'react-redux';
import {loadAPI} from './actions/data-actions'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
    this.onLoadAPI = this.onLoadAPI.bind(this);
  }
  componentDidMount() {
    document.title = "Glassix Excersize";
    fetch('https://api.ipdata.co/?api-key=' + environment.ipDataKey)
      .then(res => res.json())
      .then((data) => {
        this.onLoadAPI(data)
        this.setState({loaded: true})
      }).catch((err) => console.log(err))
  }
  onLoadAPI(data) {
    this.props.onLoadAPI(data)
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="App">
          <header className="App-header">
          {firebase}
            <Header />
            <img src={logo} className="App-logo" alt="logo" />
            <Map mapMode={this.props.mapMode} ipData={this.props.ipData} />
            <Menu />
          </header>
        </div >
      );
    }
    else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Header />
            <h3>Loading...</h3>
          </header>
        </div>
      )
    }
  }
}
const mapStatesToProps = (state, props) => {
  return {
    mapMode: state.mapMode,
    ipData: state.ipData,
  }
}

const mapActionsToProps = {
  onLoadAPI : loadAPI
}

export default connect(mapStatesToProps, mapActionsToProps) (App);
