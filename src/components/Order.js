import React from 'react';
import {formatPrice} from "../helpers";

class Order extends React.Component {
	renderOrder = (key) => {
		const mug = this.props.mugs[key];
		const count = this.props.order[key];

		return (
				<li className="order-list">
					 {count} - {mug.name}  
				- 	{formatPrice(count + mug.price)}  
					<hr/>
				</li>
		)
	};
  
    render() {
    	const orderIds = Object.keys(this.props.order)
    	const total = orderIds.reduce((prevTotal, key) =>{
    		 const mug = this.props.mugs[key];
    		 const count = this.props.order[key];
    		 const isAvailable = mug && mug.status === "true"
	    	if (isAvailable) {
	    		return prevTotal + (count + mug.price)
	    	}
	    	return prevTotal
	    },0);

        return (
          <div className="order-wrap">
          <h2>Order</h2>
          <ul>
            {orderIds.map(this.renderOrder)} 

          </ul>
         
	          <div className="total">
	          Total:
	          	<strong>{formatPrice(total)}</strong>
	          </div>
          </div>
        );
    }
}

export default Order;
