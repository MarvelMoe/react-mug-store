import React from "react";


class Mugs extends React.Component {
    
    render() {
        return (
        	<li className="menu-mug">
        		<img src={this.props.details.image} alt={this.props.details.name} />
        		<h3 className="mug-name">
					{this.props.details.name}			
        		</h3>
                <h2 className="price">${this.props.details.price}</h2>
        	</li>
            
        );
    }
}

export default Mugs;
