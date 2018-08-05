import React from 'react';
import AddMugForm from './AddMugForm';

class Inventory extends React.Component {
  

    render() {
        return (
            <div className="inventory">
            <AddMugForm />
            <h2>Inventory</h2>
            </div>
        );
    }
}

export default Inventory;
