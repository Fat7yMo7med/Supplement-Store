import { NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import { useContext} from 'react';
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
        <nav className={`navbar navbar-expand-lg ${style.navbarCustom}`}>
            <div className="container">
                <NavLink to="aboutUs" className={`navbar-brand fw-bold ${style.brand}`}>
                    <i className="fas fa-dumbbell me-2"></i>
                    Supplement Store
                </NavLink>
                
                <button className={`navbar-toggler ${style.navbarToggler}`} data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span className={style.togglerIcon}></span>
                </button>
                
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="" className={`nav-link ${style.navLink} text-center`}>
                                <i className="fas fa-home me-2 d-none d-lg-inline"></i>
                                Home
                            </NavLink>
                        </li>

                        {isLogin ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="coaches" className={`nav-link ${style.navLink} text-center`}>
                                        <i className="fas fa-user-tie me-2 d-none d-lg-inline"></i>
                                        Coaches
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="equipments" className={`nav-link ${style.navLink} text-center`}>
                                        <i className="fas fa-dumbbell me-2 d-none d-lg-inline"></i>
                                        Equipments
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="store" className={`nav-link ${style.navLink} text-center`}>
                                        <i className="fas fa-store me-2 d-none d-lg-inline"></i>
                                        Store
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="aboutUs" className={`nav-link ${style.navLink} text-center`}>
                                        <i className="fas fa-info-circle me-2 d-none d-lg-inline"></i>
                                        About Us
                                    </NavLink>
                                </li>
                            </>
                        ) : null}
                    </ul>

                    <div className={`${style.authSection} mt-3 mt-lg-0`}>
                        <ul className="navbar-nav ms-auto flex-row justify-content-center">
                            {!isLogin ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="login" className={`nav-link ${style.loginCreative} text-center`}>
                                            <div className={style.loginInner}>
                                                <i className="fas fa-sign-in-alt"></i>
                                                <span className={style.loginText}>Login</span>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item ms-2 ms-lg-3">
                                        <NavLink to="register" className={`nav-link ${style.registerCreative} text-center`}>
                                            <div className={style.registerInner}>
                                                <i className="fas fa-user-plus"></i>
                                                <span className={style.registerText}>Register</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                </> ) : ( <>
                                    <li className="nav-item">
                                        <NavLink to="/mypurchases" className={`nav-link ${style.purchaseIcon} text-center`} title='My Purchases'>
                                            <div className={style.iconContainer}>
                                                <i className="fas fa-receipt"></i>
                                            </div>
                                        </NavLink>
                                    </li>
                                    
                                    <li className="nav-item mx-2 mx-lg-3">
                                        <NavLink to="cart" className={`nav-link ${style.cartIcon} text-center`} title='Shopping Cart'>
                                            <div className={style.iconContainer}>
                                                <i className="fas fa-shopping-cart"></i>
                                            </div>
                                        </NavLink>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <button onClick={logOut} className={`btn ${style.logoutCreative} text-center`} title='Log Out'>
                                            <div className={style.logoutInner}>
                                                <i className="fas fa-power-off"></i>
                                                <span className={style.logoutText}>Logout</span>
                                            </div>
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}