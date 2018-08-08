import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import mug from '../sample-mugs';
import Mugs from './Mugs';

class App extends React.Component {
	// Set Initial State
	state = {
		mugs: {},
		order: {}
	};

	addMug = mug => {
		
		const mugs = { ...this.state.mugs }

		mugs[`mugs${Date.now()}`] = mug;
		// set the new mug object created to state
		this.setState({mugs})
	}

	loadSampleMugs = () => {
		this.setState({ mugs: mug }) 
	}

    render() {
        return (
        	 <div className="catch-of-the-day"> 
	            	<div className="menu">
	            		<Header tagline={"OF THE"} />
	            		<ul className="mugs">
	            			{Object.keys(this.state.mugs).map(key => (<Mugs key={key} details={this.state.mugs[key] }/>
	            				))}
	            		</ul>
	            	</div>
            	<Order/>
            	<Inventory 
            	addMug={this.addMug}
            	loadSampleMugs={this.loadSampleMugs}
            	 />
             </div>     	            
        	)
       
    }
}

export default App;
