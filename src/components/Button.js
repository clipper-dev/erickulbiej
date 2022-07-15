import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--secondary', 'btn--cancel', 'btn--outline', 'btn--neu', 'btn--initial', 'btn--initial--pressed', 'btn--semitransparent'];

const SIZES = ['btn--medium', 'btn--large', 'btn--medium--round', 'btn--long', 'btn--small'];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	)
};