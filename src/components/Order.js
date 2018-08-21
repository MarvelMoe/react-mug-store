import React from 'react';
import {formatPrice} from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
	renderOrder = (key) => {
		const mug = this.props.mugs[key];
		const count = this.props.order[key];
		const isAvailable = mug && mug.status === "true";
		const transitionOptions = {
		  classNames: "order",
		  key,
		  timeout: { enter: 500, exit: 500 }
		};
		
		if (!mug) return null;
		if(!isAvailable) {
			return (
				<CSSTransition {...transitionOptions}>
				 <li key={key}>
					 Sorry {mug ? mug.name : "mug"} is not available
				 </li>
			 	</CSSTransition>
			 )
		}

		return (
			<CSSTransition {...transitionOptions}>
			  <li key={key}>
			    <span>
			      <TransitionGroup component="span" className="count">
			        <CSSTransition
			          classNames="count"
			          key={count}
			          timeout={{ enter: 500, exit: 500 }}
			        >
			          <span>{count}</span>
			        </CSSTransition>
			      </TransitionGroup>
			      lbs {mug.name}
			      {formatPrice(count * mug.price)}
			      <button onClick={() => this.props.deleteFromOrder(key)}>
			        &times;
			      </button>
			    </span>
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
