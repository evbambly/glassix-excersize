import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { changeMode } from './actions/mode-actions'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeMode = this.onChangeMode.bind(this);
  }
  onChangeMode(value) {
    this.props.onChangeMode(value)
  }
  render() {
    return (
      <BottomNavigation
        value={this.props.mapMode}
        onChange={(event, value) => {
          this.onChangeMode(value)
        }}
        showLabels
      >
        <BottomNavigationAction value="streetview" label="StreetView" icon={<AssistantPhotoIcon />} />
        <BottomNavigationAction value="view" label="View" icon={<LocationOnIcon />} />
        <BottomNavigationAction value="search" label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    );
  }
}

const mapStatesToProps = (state, props) => {
  return {   
    mapMode: state.mapMode
  }
}

const mapActionsToProps = {
  onChangeMode: changeMode
}

export default connect(mapStatesToProps, mapActionsToProps)(Menu);