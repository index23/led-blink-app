'use strict';

import React from 'react';

export default class Button extends React.Component {
	blink() {
		// console.log('jedaaaaan');
		var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://localhost:3000/service/blink', false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
	}

	render() {
		const name = "Turn on / off";
		return (
			<button className='onOff' onClick={this.blink}>{name}</button>
		);
	}
}
