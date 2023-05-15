import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {NavLink} from "react-router-dom";


let Product = (props) => {
    return (
        <div class="col-md-3 p-3">

            <div class="p-3 shadow" style={{height:"680px"}}> 
                    <img src={props.product.image} alt={props.product.title} className='p-2 w-100' style={{height:"450px"}}/>
                <div class="badge bg-danger">sale</div>
                <div class="title py-4 pb-1 h5">{props.product.title}</div>
                <div class="d-flex align-content-center justify-content-center"> <span class="fas fa-star">
                    </span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                     <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
                <div class="price">Rs {props.product.price}</div>


                <NavLink to={`/details/${props.product.id}`} >
                    <input type="button" class="btn btn-warning my-2 float-end" value={"Know More"}      />
                </NavLink>



            </div>
        </div>)
    }

export default Product;