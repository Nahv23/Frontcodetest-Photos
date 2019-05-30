import React from 'react';

import logo from './logo.png';

export default function Header (){

  return (

    <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <span className="logoimg">
                <img className="logo rounded-pill w-50" alt="logo" src={logo}></img>
            </span>

            <div className="rest col-lg-4">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="/albums" className="nav-item nav-link toggle-active">Albums</a>
                        <div className="nav-item dropdown">
                            <a href="/photos" className="nav-link dropdown-toggle" data-toggle="dropdown">Photos</a>
                            <div className="dropdown-menu">
                                <a href="/albums/photos" className="dropdown-item">A to Z</a>
                                <a href="/albums/photos" className="dropdown-item">Z to A</a>
                            </div>
                        </div>
                    </div>
                    <form className="form-inline">
                        <div className="input-group">                    
                            <input type="text" className="form-control" placeholder="Search"/>
                            <div className="input-group-append">
                                <button type="button" className="btn btn-secondary"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    </header>

    

  )
}

