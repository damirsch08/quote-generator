import React from "react";
import Quotes from "./Quotes";

const styles = {
	language: {
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		backgroundColor: 'rgb(226, 233, 40)',
		fontSize: '16px',
		padding: '3px' + ' 6px'
	}
}

export default class QuotesGenerator extends React.Component{
	constructor(props){
		super(props);
		this.state = {onToggle: true};
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOffClick = this.handleOffClick.bind(this);
	}

	handleOnClick(){
		this.setState({onToggle: false})
	}

	handleOffClick(){
		this.setState({onToggle: true})
	}

	render(){
		const onToggle = this.state.onToggle;
		if(onToggle){
			return(
				<div>
					<button style={styles.language} onClick={this.handleOnClick}>En</button>
					<Quotes onToggle={onToggle}/>
				</div>
			)
		}
		return(
			<div>
				<button style={styles.language} onClick={this.handleOffClick}>Ru</button>
				<Quotes onToggle={onToggle}/>
			</div>
		)
	}
}