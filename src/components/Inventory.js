import React from 'react';
import PropTypes from "prop-types";
import AddMugForm from './AddMugForm';
import EditForm from './EditForm';
import Login from './Login';
import base, {firebaseApp} from '../base';
import firebase from 'firebase';

class Inventory extends React.Component {
static propTypes = {
    mug: PropTypes.object,
    updateMug: PropTypes.func,
    deleteMug: PropTypes.func,
    loadSampleMugs: PropTypes.func
}

state = {
  uid: null,
  owner: null
};

componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    //  Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //  Claim it if there is no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //  Set state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    console.log("Logging out!");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

    render() {
        const logout = <button onClick={this.logout}>Log Out!</button>;

        // Check if they are logged in
        if (!this.state.uid) {
          return <Login authenticate={this.authenticate} />;
        }

        // Check if they are not the owner of the store
        if (this.state.uid !== this.state.owner) {
          return (
            <div>
              <p>Sorry you are not the owner!</p>
              {logout}
            </div>
          );
        }

        return (
            <div className="inventory">
                <h2>Inventory</h2>
                  {logout}
                {Object.keys(this.props.mug).map(key => (
                    <EditForm 
                    key={key}
                    index={key}
                    mug={this.props.mug[key]}
                    updateMug={this.props.updateMug}
                    deleteMug={this.props.deleteMug}
                     />
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
