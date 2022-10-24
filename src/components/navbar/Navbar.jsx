import { useState } from 'react';

import Logo from "./Logo";

import Hamburger from "./Hamburger";
import NavList from "./NavList";

import "./index.scss";

function Navbar() {

    const [isActiveComponent, setActiveComponent] = useState(false);

    const toggleClass = () => {
        setActiveComponent(!isActiveComponent);
    };

    return (
        <nav className='navbar'>
            <div className="container">
                <div className="row">
                    <Logo />
                    <Hamburger isActiveComponent={isActiveComponent} toggleClass={toggleClass} />
                    <NavList isActiveComponent={isActiveComponent} setActiveComponent={setActiveComponent} toggleClass={toggleClass} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;