import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <header>
            <h1>
                <Link to='/'>Color Theory</Link>
                </h1>
            <nav>
            <ul>
                <li>
                    {/* <Link to=''>User Page</Link> */}
                </li>
                <li>Search</li>
                <li>
                    <Link to ='/create'>Create a Palette</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}

export default Nav;