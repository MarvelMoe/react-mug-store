
import React from 'react';

class AddMugForm extends React.Component {
      nameRef = React.createRef();
        priceRef = React.createRef();
          statusRef = React.createRef();
           descRef = React.createRef(); 
             imageRef = React.createRef();


// Turn inputs into mug object with all the values from them with ref.create()
  createMug = event => {

		event.preventDefault();
    const mug = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    }
    this.props.addMug(mug)
    
    // Reset form after submission
    event.currentTarget.reset()
  }

    render() {
        return (
       		<form className="mug-edit" onSubmit={this.createMug}>
       		 <input ref={this.nameRef} name="name" text="text" placeholder="name" />
       		 <input ref={this.priceRef} name="price" text="text" placeholder="price" />
       		 <select ref={this.statusRef} name="status">
	       		 <option value="available">In Stock</option>
	       		 <option value="unavailable">Out of Stock</option>
       		 </select>
       		 <textarea ref={this.descRef} name="desc"  placeholder="desc" />
       		 <input ref={this.imageRef} name="image" text="image" placeholder="image " />
       		 <button type="submit"> Add Mug</button>
       		</form>
         
        );
    }
}

export default AddMugForm;
