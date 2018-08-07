import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleMugs from '../sample-mugs';

class App extends React.Component {
	// Set Initial State
	state = {
		mugs: {},
		order: {}
	};

	addMug = mug => {
		
		const mugs = { ...this.state.mugs }

		mugs[`mugz${Date.now()}`] = mug;
		// set the new mug object created to state
		this.setState({mugs})
	}
	loadSampleMugs = () => {
		this.setState({ mugs: sampleMugs })
		 
	}

    render() {
        return (
        	 <div className="catch-of-the-day"> 
	            	<div className="menu">
	            		<Header tagline={"OF THE"} />
	            	</div>
            	<Order/>
            	<Inventory 
            	addMug={this.addMug}
            	loadSampleMugs={this.loadSampleMugs}
            	 />
            	}
             </div>     	            
        	)
       
    }
}

export default App;
