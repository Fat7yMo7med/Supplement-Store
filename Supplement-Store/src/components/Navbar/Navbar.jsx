import { NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import { useContext } from 'react';
import { userContext } from '../../Context/UserContext';

export default function Navbar() {

    let navigate = useNavigate();

    let { isLogin, setLogin } = useContext(userContext);

    function logOut() {
        localStorage.removeItem('userToken');
        setLogin(null);
        navigate('/login');
    }

    return (
        <nav className={`navbar navbar-expand-lg custom shadow-sm ${style.custom}`}>
            <div className="container">
                <NavLink to="" className="navbar-brand fw-bold text-white"> Supplement Store </NavLink>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNavbar"> <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink to="" className="nav-link active" style={{ color: "#00e5ff" }}> Home </NavLink>
                        </li>

                        {isLogin ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="coaches" className="nav-link text-white">
                                        Coaches
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="equipments" className="nav-link text-white">
                                        Equipments
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="store" className="nav-link text-white">
                                        Store
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="aboutUs" className="nav-link text-white">
                                        AboutUs
                                    </NavLink>
                                </li>
                            </>
                        ) : null}
                    </ul>
                </div>

                <div className="login">
                    <ul className="navbar-nav ms-auto">
                        {!isLogin ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="login" className="nav-link text-warning">
                                        Login
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="register" className="nav-link text-warning">
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="cart" className="nav-link mx-3"> <i className="fa-solid fa-cart-arrow-down fa-xl" style={{color: '#fa0000'}} /></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-warning" onClick={() => {logOut()}}> Log Out </NavLink>
                                    </li>
                                </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
