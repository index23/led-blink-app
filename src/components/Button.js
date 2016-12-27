import React from 'react';

export default class Button extends React.Component {
	render() {
		const name = "Turn on / off LED";
		return (
			<button className='onOff'>{name}</button>
		);
	}
}