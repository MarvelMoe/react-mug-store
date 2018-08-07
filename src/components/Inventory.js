import React from 'react';
import AddMugForm from './AddMugForm';

class Inventory extends React.Component {
  

    render() {
        return (
            <div className="inventory">
            <h2>Inventory</h2>
            <AddMugForm addMug={this.props.addMug} />
            <button onClick={this.props.loadSampleMugs} >
            	Load mugs
            </button>
           
            </div>
        );
    }
}

export default Inventory;
