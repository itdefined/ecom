import { NavLink } from "react-router-dom"
import {UseCartContext} from '../contexts/cartContext.js';


let AddToCart = (props) => {
    const { addToCart } = UseCartContext();

    return (
        <NavLink to='/cart/'  onClick={() => addToCart(props.product, 1)}>
            <input type={"button"} className="btn btn-success" value="Add to Cart" />
        </NavLink>
    )
    }

export default AddToCart;



