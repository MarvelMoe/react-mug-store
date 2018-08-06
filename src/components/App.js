import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
	// Set Initial State
	state = {
		mugs: {},
		order: {}
	};
	addMug = mug => {
		
		const mugs = { ...this.state.mugs }

		mugs[`mugz${Date.now()}`] = mug;

			this.setState({mugs})
	}

    render() {
        return (
        	 <div className="catch-of-the-day"> 
	            	<div className="menu">
	            		<Header tagline={"OF THE"} />
	            	</div>
            	<Order/>
            	<Inventory addMug={this.addMug} />
             </div>     	            
        	)
       
    }
}

export default App;
