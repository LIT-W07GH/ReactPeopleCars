import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to='/' className='navbar-brand'>
                            React
                        </Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to='/' className='navbar-brand'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/addperson' className='navbar-brand'>
                                    Add Person
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;