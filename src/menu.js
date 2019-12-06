import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  render() {
    return (
      <BottomNavigation
        value={this.state.value}
        onChange={(event, newValue) => {
          this.setState({ value: newValue });
          this.props.callback(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="StreetView" icon={<AssistantPhotoIcon />} />
        <BottomNavigationAction label="View" icon={<LocationOnIcon/>} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    );
  }
}

export default Menu;