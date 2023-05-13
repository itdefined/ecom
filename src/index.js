import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Layout from './Layout'
import Footer from './components/Footer';
import "./App.css"
import Detail from './pages/Detail';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
          <Route path='details/:id' element={<Detail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);


