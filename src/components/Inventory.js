import React from 'react';
import PropTypes from "prop-types";
import AddMugForm from './AddMugForm';
import EditForm from './EditForm';
import Login from './Login';
import {firebaseApp} from '../base';
import firebase from 'firebase';


class Inventory extends React.Component {
  
static propTypes = {
    mug: PropTypes.object,
    updateMug: PropTypes.func,
    deleteMug: PropTypes.func,
    loadSampleMugs: PropTypes.func
}

authHandler = async (authData) => {
    console.log(authData)
}

authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler);
};


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
