import React from "react";

class EditForm extends React.Component {
	handleChange = (event) => {
		const updatedMug = {
			...this.props.mug,
			[event.currentTarget.name]: event.currentTarget.value
		}
		this.props.updateMug(this.props.index, updatedMug)
	}
	render(){
		return (
		<div className="mug-edit">
			<input type="text" name="name" onChange={this.handleChange} value={this.props.mug.name}/>
			<input type="text" name="price" onChange={this.handleChange} value={this.props.mug.price}/>
			<select type="text" name="name" onChange={this.handleChange} value={this.props.mug.name}>
	       		 <option value="available">In Stock</option>
	       		 <option value="unavailable">Out of Stock</option>
   			</select>
			<textarea type="text" name="desc" onChange={this.handleChange} value={this.props.mug.desc}></textarea>
			<input type="text" name="image" onChange={this.handleChange} value={this.props.mug.image}/>

		</div>


		)
	}
}

export default EditForm; 