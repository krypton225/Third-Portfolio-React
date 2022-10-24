import Logo from "./Logo";
import Hamburger from "./Hamburger";
import NavList from "./NavList";

import "./index.scss";
import { useState } from "react";

function Navbar() {

    const [openMenu, setOpenMenu] = useState(true);

    return (
        <nav className='navbar'>
            <div className="container">
                <div className="row">
                    <Logo />
                    <Hamburger openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    <NavList />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
