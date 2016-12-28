'use strict';

import React from 'react';

export default class Button extends React.Component {
	render() {
		const name = "Turn on / off";
		return (
			<button className='onOff'>{name}</button>
		);
	}
}
