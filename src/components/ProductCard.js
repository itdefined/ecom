import { NavLink } from "react-router-dom";

function ProductCard(props) {
    return (
            
            <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
            <div className="product"> 
            
            <NavLink to={`/details/{props.product.id}`}>
                    <img src={props.product.image} alt=""/>
            </NavLink>

                <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                    <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                    <li className="icon mx-3"><span className="far fa-heart"></span></li>
                    <li className="icon"><span className="fas fa-shopping-bag"></span></li>
                </ul>
            </div>
            <div className="tag bg-red">sale</div>
            <div className="title pt-4 pb-1">{props.product.title}</div>
            <div className="d-flex align-content-center justify-content-center"> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> <span className="fas fa-star"></span> </div>
            <div className="price">Rs. {props.product.price}</div>
            </div>)


}

export default ProductCard;