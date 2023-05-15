import { useState, useEffect } from 'react';
import Carosel from '../components/Carosel.js';
import Product from '../components/Product.js';
import axios from 'axios';




let productsURL = "https://fakestoreapi.com/products"
let Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
                    axios.get(productsURL).then(
                        (response) => setPosts(response.data))
                    }, []);

    if (!posts) return null;

    return (
        <div className='container-fluid p-0'>
            <Carosel/>
            <h3 className=''>Products</h3>
            <div className='container-fluid'>
                <div className='row mt-5 p-5'>
                    {posts.map(data => <Product product={data}/>)}
                    </div>
            </div>
            
        </div>
    )
    }

export default Home;