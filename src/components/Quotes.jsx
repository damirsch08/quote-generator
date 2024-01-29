import React from "react";
import quotesRu from "../data/quotesRu.js";
import quotes from "../data/quotes.js";

export default class Quotes extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {i: Math.floor(Math.random() * quotes.length)};
	};

	handleClick(){
		this.setState({i: Math.floor(Math.random() * quotes.length)});
	};

	render(){
		if(this.props.onToggle){
			return(
				<div className="quote">
					<div className="block">
						{quotes[this.state.i].quote}
						<div className="author">
							{quotes[this.state.i].author}
						</div>
					</div>
					<button onClick={this.handleClick} className="button">Generate</button>
				</div>
			);
		}
		return(
			<div className="quote">
				<div className="block">
					{quotesRu[this.state.i].quote}
					<div className="author">
						{quotesRu[this.state.i].author}
					</div>
				</div>
				<button onClick={this.handleClick} className="button">Генерировать</button>
			</div>
		);
	};
}