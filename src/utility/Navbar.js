import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <h1>Tech Talk - React Router</h1>
            <nav>
                <Link to="/">C'est quoi ?</Link><span> | </span>
                <Link to="/install">Comment l'installer ?</Link><span> | </span>
                <Link to="/use">Comment l'utiliser ?</Link><span> | </span>
                <Link to="/sources">Sources</Link>
            </nav>
        </header>
    );
};

export default Navbar;