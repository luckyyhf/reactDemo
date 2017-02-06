import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap(){
	alert('this is a demo!!!');
}
const styles={
	title:{
		cursor:'pointer',
	}
};

const App = ()=>(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <AppBar 
    title={<span style={styles.title}>hello!</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label='Save' />}
    />
  </MuiThemeProvider>
	);

ReactDOM.render(<App />,document.getElementById('app'));
