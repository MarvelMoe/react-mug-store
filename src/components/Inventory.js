import React from 'react';
import AddMugForm from './AddMugForm';

class Inventory extends React.Component {
  

    render() {
        return (
            <div className="inventory">
            <h2>Inventory</h2>
            <AddMugForm addMug={this.props.addMug} />
           
            </div>
        );
    }
}

export default Inventory;
