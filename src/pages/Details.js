import {useParams} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddToCart from '../components/AddToCart.js';




let Details = () => {
    const {id} = useParams()
    let productsURL = `https://fakestoreapi.com/products/${id}`
    const [singlePost, setSinglePost] = useState(null)

    useEffect(() => {
                    axios.get(productsURL).then(
                        (response) => setSinglePost(response.data))
                    }, []);

    if (!singlePost) return null;


    return (
        <div className='container-fluid'  style={{height:"650px"}} >
            <div className='row mt-5'>
                <div className='offset-md-1 col-md-3 bg-light py-5'>
                    <img src={singlePost.image} alt={singlePost.title} className='p-2 w-100' style={{height:"500px"}}/>
                </div>
                <div className='col-md-5 px-3'>
                    <h3>{singlePost.title}</h3>
                    <p>{singlePost.description}</p>
                    <div class="d-flex text-warning"> <span class="fas fa-star">
                    </span> <span class="fas fa-star"></span> <span class="fas fa-star"></span>
                     <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
                    
                    <h5 className="mt-3">Rs. {singlePost.price}</h5>

                    <div class="d-flex "> 
                        <span class="fas fa-minus-circle text-secondary p-2"> </span>
                        <span class="h4 mt"> 1 </span>
                        <span class="fas fa-plus-circle text-secondary p-2"> </span>
                    </div>

                    <AddToCart product={singlePost}/>

                </div>


            </div>
        </div>
    )
    }

export default Details;