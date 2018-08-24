import React from 'react';
import PropTypes from "prop-types";
import AddMugForm from './AddMugForm';
import EditForm from './EditForm';
import Login from './Login';


class Inventory extends React.Component {
  
static propTypes = {
    mug: PropTypes.object,
    updateMug: PropTypes.func,
    deleteMug: PropTypes.func,
    loadSampleMugs: PropTypes.func
}

authenticate = () => {
    console.log("you're logged in")
}

    render() {
        return <Login authenticate={this.authenticate} />
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
                <button onClick={this.props.loadSampleMugs} >
                	Load mugs
                </button>
            </div>
        );
    }
}

export default Inventory;
