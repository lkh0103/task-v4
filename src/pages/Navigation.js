import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className='container-fuild'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/title">Title</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/request">Request</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/request2">Request 2</NavLink>
                        </li><li className="nav-item">
                            <a className="nav-link" href="#">A</a>
                        </li><li className="nav-item">
                            <a className="nav-link" href="#">B</a>
                        </li><li className="nav-item">
                            <a className="nav-link" href="#">C</a>
                        </li><li className="nav-item">
                            <a className="nav-link" href="#">D</a>
                        </li><li className="nav-item">
                            <a className="nav-link" href="#">E</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

