import ProductCard from '../components/ProductCard';
import axios from 'axios';
import {useEffect, useState} from 'react'



let product_api = 'https://fakestoreapi.com/products'

function Banner() {
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/banner1.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/banner2.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="images/banner3.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </>
  );
}


function ProductList() {
  let [posts, setPosts] = useState(null)
  useEffect(() => {
                    axios.get(product_api).then( (response) => {
                      setPosts(response.data)
                    })
                  }, []);

  if (!posts) return null;    
  
  
  return (
      <div className='container-fluid'>
        <div className="row">
          {posts.map(post => <ProductCard product={post} />)}
        </div>
      </div>)
}


function Men() {
    return (
      <>
          <Banner/>
          <ProductList/>
      </>
    );
  }

export default Men;