import React from 'react';
import dg from '../../res/images/D-group.png'
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu
} from "./NavbarElements";

function Navbar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={dg} alt="logo" style={{height: "100px"}}></img>
                </NavLink>
                <Bars onClick={toggle}/>
                <NavMenu>
                    
                    <NavLink to="/calender" activeStyle>
                        Festkalender
                    </NavLink>
                    <NavLink to="/rules" activeStyle>
                        Regler
                    </NavLink>
                    
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
