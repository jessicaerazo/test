import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pinkA200,indigo700,orange700,grey100,cyan700,grey600} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    // textColor: indigo700,
    primary1Color: indigo700,
    primary2Color: pinkA200,
  },
});

class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar position="static" iconElementRight={<AppBarMenu />}/>
        <Card title="Financial 101"
              bgcolor={pinkA200}
              details="Lorem Ipsum is simply dummy text of the printing and
          typesetting industry."/>
        <Card title="401k Options"
              bgcolor={cyan700}
              details="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
        <Card title="Investing"
              bgcolor={orange700}
              details="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "/>
        <Card title="How to start"
              bgcolor={pinkA200}
              details="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."/>
        <Card title="Fast Cash"
              bgcolor={cyan700}
              details="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "/>
        <Card title="Piggy Bank"
              bgcolor={orange700}
              details="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."/>
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


class Card extends Component{
  render(){
    var cardColorStyle = {
      backgroundColor: this.props.bgcolor
    };
    return (
      <div className="card" style={cardColorStyle}>
        <p className="title">{this.props.title}</p>
        <p className="details">{this.props.details}</p>
        <p className="btn">Read Now</p>
      </div>
    )
  }
}

export default App;
