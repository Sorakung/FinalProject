import React from 'react';
import {Link} from 'react-scroll'

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 class="navbar-brand" href="#">Covid-19</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <Link class="nav-link" to="Map" smooth={true} duration={1000}>Map</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="gMap" smooth={true} duration={1000}>Google Map</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="IData" smooth={true} duration={1000}>Interactive Data</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="IGa" smooth={true} duration={1000}>Interactive graph</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;