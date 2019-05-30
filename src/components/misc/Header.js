import React from 'react';


import logo from './logo.png';

export default function Header (){

  return (

    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <img className="logo" alt="logo" src={logo}></img>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="#" className="nav-item nav-link active">Home</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Messages</a>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">Inbox</a>
                        <a href="#" className="dropdown-item">Sent</a>
                        <a href="#" className="dropdown-item">Drafts</a>
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
    </nav>

  )
}

