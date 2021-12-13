import React, { Component } from 'react';
import '../node_modules/bootstrap.dist/css/bootstrap.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="NavBarItems">
                
            <Nav.Link href="/travellocation">Travel Location</Nav.Link>
            <Nav.Link href="/pictures">Pictures</Nav.Link>
            </nav>
               )   
    }
}