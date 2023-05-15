import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './Layout.js';
import Home from './pages/Home.js';
import Men from './pages/Men.js';
// import Women from './pages/Women.js';
// import Kids from './pages/Kids.js';
// import Beauty from './pages/Beauty.js';
import Footer from './components/Footer.js';
import Details from './pages/Details.js';
import Cart from './pages/Cart.js';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
              <Route index element={<Home/>} />
              <Route path='/men' element={<Men/>}  />
              <Route path='/details/:id' element={<Details/>}  />
              <Route path='/cart/' element={<Cart/>}  />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>);
}

export default App;
