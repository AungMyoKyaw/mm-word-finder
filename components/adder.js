import React from 'react';

class Adder extends React.Component{
	constructor(props) {
		super(props);
		this.state = {eng:'',burmese:''};
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(e){
		this.setState({e.target.name:e.target.value})
	}

	render(){
		<div>
			<form>
				<input name="eng" onChange={this.onChangeHandler} value={this.state.eng}/>
				<input name="burmese" onChange={this.onChangeHandler} value={this.state.burmese}/>
				<input type="submit" value="Add"/>
			</form>
		</div>
	}
}

export default Adder;
