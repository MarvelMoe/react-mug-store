
import React from 'react';

class AddMugForm extends React.Component {

  createMug = (event) => {
		event.preventDefault();
  }

    render() {
        return (
       		<form className="mug-edit" onSubmit={this.createMug}>
       		 <input name="name" text="text" placeholder="name" />
       		 <input name="price" text="text" placeholder="price" />
       		 <select name="status">
	       		 <option value="available">In Stock</option>
	       		 <option value="unavailable">Out of Stock</option>
       		 </select>
    
       		 <textarea name="desc"  placeholder="desc" />
       		 <input name="image" text="image" placeholder="image " />
       		 <button type="submit"> Add Mug</button>
       		</form>
         
        );
    }
}

export default AddMugForm;
