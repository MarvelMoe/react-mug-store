import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import mug from '../sample-mugs';
import Mugs from './Mugs';
import base from '../base';

class App extends React.Component {
	// Set Initial State
	state = {
		mugs: {},
		order: {}
	};

	componentDidMount() {
 	 const { params } = this.props.match;

 	 const localStorageReference = localStorage.getItem(params.storeId)
 	 if (localStorageReference) {
 	 	this.setState( { order: JSON.parse(localStorageReference) })
 	 }

	 this.ref = base.syncState(`${params.storeId}/mugs`, {
		  context: this,
		  state: "mugs"
		 });
	}

	componentDidUpdate() {
		localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
	}

	componentWillUnmount() {
		base.removeBinding(this.ref)
	}

	addMug = mug => {
		
		const mugs = { ...this.state.mugs }

		mugs[`mugs${Date.now()}`] = mug;
		// set the new mug object created to state
		this.setState({mugs})
	}

	updateMug = (key, updatedMug) => {

		const mugs = { ...this.state.mugs }

		mugs[key] = updatedMug;

		this.setState({ mugs });
	}

	loadSampleMugs = () => {
		this.setState({ mugs: mug }) 
	}

	addToOrder = (key) => {
		// get copy of state
		const order = { ...this.state.order }
		// add to order or update order
		order[key] =  order[key] + 1 || 1;
		// call setState to update obkject
		this.setState({ order })
	}

    render() {
        return (
        	 <div className="catch-of-the-day"> 
	            	<div className="menu">
	            		<Header tagline={"OF THE"} />
	            		<ul className="mugs">
	            			{Object.keys(this.state.mugs).map(key => (
	            			 <Mugs key={key} 
	            			 index={key}
	            			 details={this.state.mugs[key]} 
	            			 addToOrder={this.addToOrder}
	            			  />
	            			))}
	            		</ul>
	            	</div>
            	<Order mugs={this.state.mugs} order={this.state.order} />
            	<Inventory 
            	addMug={this.addMug}
            	updateMug={this.updateMug}
            	loadSampleMugs={this.loadSampleMugs}
            	mug={this.state.mugs}
            	 />
            	}
             </div>     	            
        	)
       
    }
}

export default App;
