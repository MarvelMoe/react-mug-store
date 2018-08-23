import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers"

class Mugs extends React.Component {

    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string, 
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func
    }

    render() {
        // Destructuring to set all variables at once
        const { image, name, price, desc, status } = this.props.details;
        //Boolean to determine if items are in stock
        const isAvailable = status === "true";

        return (
        	<li className="menu-mug">
        		<img src={this.props.details.image} alt={this.props.details.name} />
        		<h4 className="mug-name">
					{name}		
        		</h4>
                <hr/>    
                <p>{desc}</p>
                <h4 className="price">{formatPrice(price)}</h4> 
                <button disabled={!isAvailable} 
                onClick={() => this.props.addToOrder(this.props.index)} >
                {isAvailable ? "Add To Cart" : "Sold Out!"}
               </button>
              
        	</li>
        );
    }
}

export default Mugs;
