import PropTypes from 'prop-types' 

const Button = ({color, text}) => {
	const onClick = (e) => {
		console.log('Click') 
	}
	return (
		<button 
		onClick={onClick}
		style={{ backgroundcolor: color }} 
		className='btn' 	
		> 
		{text}
		</button> 
	)
}

Button.defaultProps =  {
	color: 'steelblue',  
}
Button.propTypes = {
	text: PropTypes.string, 
	color: PropTypes.string, 
}

export default Button; 
