import React from 'react';
import AddMugForm from './AddMugForm';
import EditForm from './EditForm';


class Inventory extends React.Component {
  

    render() {
        return (
            <div className="inventory">
            <h2>Inventory</h2>
            {Object.keys(this.props.mug).map(key =>  (
                <EditForm 
                key={key}
                index={key}
                mug={this.props.mug[key]}
                updateMug={this.props.updateMug}
                deleteMug={this.props.deleteMug} />
                ))}
            <AddMugForm addMug={this.props.addMug} />
            <button onClick={this.props.loadSampleMugs} >
            	Load mugs
            </button>
           
            </div>
        );
    }
}

export default Inventory;
