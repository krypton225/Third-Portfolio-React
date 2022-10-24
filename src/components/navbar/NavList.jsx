function NavList() {
    return (
        <>
            <ul className="navbar__list">
                <li className="navbar__list__item">
                    <a href="/" className="navbar__list__item__link">home</a>
                </li>

                <li className="navbar__list__item">
                    <a href="#about" className="navbar__list__item__link">about</a>
                </li>

                <li className="navbar__list__item">
                    <a href="/" className="navbar__list__item__link">portfolio</a>
                </li>

                <li className="navbar__list__item">
                    <a href="/" className="navbar__list__item__link">testimonials</a>
                </li>

                <li className="navbar__list__item">
                    <a href="/" className="navbar__list__item__link">works</a>
                </li>

                <li className="navbar__list__item">
                    <a href="/" className="navbar__list__item__link">contact</a>
                </li>
            </ul>
        </>
    )
}

export default NavList;
