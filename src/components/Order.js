import React from 'react';
import {formatPrice} from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
	renderOrder = (key) => {
		const mug = this.props.mugs[key];
		const count = this.props.order[key];
		const isAvailable = mug && mug.status === "true";
		
		if (!mug) return null;
		if(!isAvailable) {
			return (
			 <li key={key}>
				 Sorry {mug ? mug.name : "mug"} is not available
			 </li>
			 )
		}

		return (
			<CSSTransition classNames="order" key={key} timeout={{enter:250, exit:250}}>
				<li key={key} className="order-list">
					 {count} - {mug.name}  
				- 	{formatPrice(count + mug.price)}  
					<hr/>
					 <button onClick={() => this.props.deleteFromOrder(key)}>&times;</button>		 
				</li>
			</CSSTransition>
		)
	};
  
    render() {
    	const orderIds = Object.keys(this.props.order)
    	const total = orderIds.reduce((prevTotal, key) =>{
    		 const mug = this.props.mugs[key];
    		 const count = this.props.order[key];
    		 const isAvailable = mug && mug.status === "true";
	    	if (isAvailable) {
	    		return prevTotal + (count + mug.price)
	    	}
	    	return prevTotal
	    },0);

        return (
          <div className="order-wrap">
          <h2>Order</h2>
          <TransitionGroup component="ul" className="order">
            {orderIds.map(this.renderOrder)} 
          </TransitionGroup>
         
	          <div className="order-total">
	          Total:
	          	<strong>{formatPrice(total)}</strong>
	          </div>
          </div>
        );
    }
}

export default Order;
