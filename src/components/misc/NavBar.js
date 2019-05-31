import React from 'react';

import logo from './nombreTacubayaJapones.png';

export default function Header (){

  return (

    <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <span className="logoimg">
                <img className="logo rounded-pill w-50" alt="logo" src={logo}></img>
            </span>

            <div className="rest col-lg-4">
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="/albums" className="nav-item nav-link toggle-active">Go to Albums</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    

  )
}

