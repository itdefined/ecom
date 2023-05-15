
import { Outlet, Link } from 'react-router-dom';
import logo from './logo.png';


const Layout = () => {
    return (
            <>
                <nav className="navbar navbar-expand-lg navbar-white bg-white py-3 shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand ps-5" to='/'>
                    <img src={logo} style={{width:"80px"}} alt={"Logo"}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" href="/men">Men</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" href="/women">Women</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" href="/kids">Kids</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link" href="/beauty">Beauty</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                <Outlet/>
            </>
    )}


export default Layout;