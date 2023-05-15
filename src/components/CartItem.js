import {UseCartContext} from '../contexts/cartContext.js';
let CartItem = (props) => {
    const { removeFromCart} = UseCartContext();
    return (
            <div className="row mb-3 border py-3">
                    <div className="col-md-1">
                        <img src={props.cartedItem.product.image} className="w-100" alt={props.cartedItem.product.title}/>
                    </div>
                    <div className="col-md-6">
                        <h5>{props.cartedItem.product.title}</h5>
                        <p>{props.cartedItem.product.description}</p>
                    </div>
                    <div className="col-md-1 h6">{props.cartedItem.product.price}</div>
                    <div className="col-md-1 h6">{props.cartedItem.quantity}</div>
                    <div className="col-md-2 h6">{props.cartedItem.product.price * props.cartedItem.quantity}</div>
                    <div className="col-md-1"><i className="fa fa-trash"  onClick={() => removeFromCart(props.cartedItem.product)}></i></div>
            </div>)
    }

export default CartItem;