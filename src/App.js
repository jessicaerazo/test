import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <AppBar position="static" iconElementRight={<AppBarMenu />} />
      </MuiThemeProvider>
      </div>
    );
  }
}

class AppBarMenu extends Component{
  render(){
    return (
      <IconMenu iconButtonElement={<IconButton ><MoreVertIcon color={'#ffffff'} /></IconButton>}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    )
  }
}

export default App;
