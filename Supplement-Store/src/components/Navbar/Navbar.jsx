import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to={''} className="navbar-brand">Supplement Store</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to={''} className="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'coaches'} className="nav-link" >Coaches</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'equipments'} className="nav-link" >Equipments</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'products'} className="nav-link" >Products</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'store'} className="nav-link" >Store</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'aboutUs'} className="nav-link" >AboutUs</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <NavLink to={'login'} className="nav-link active" >Login</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={'register'} className="nav-link" >Register</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={''} className="nav-link" >Log Out</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
