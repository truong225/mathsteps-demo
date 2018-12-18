import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Math from './components/Math'
import './styles/App.css';

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className='App'>
					<div className='App-header'>
						Demo mathstep
					</div>
					<Math />
				</div>
			</MuiThemeProvider>
		);
	}
}
