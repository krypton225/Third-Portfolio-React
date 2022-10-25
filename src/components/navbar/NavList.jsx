import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function NavList({ isActiveComponent, toggleClass }) {

    return (
        <>
            <ul className={`navbar__list ${isActiveComponent ? "active" : ""}`} onClick={toggleClass}>
                <CloseIcon id="close-icon" onClick={toggleClass} />

                <li className="navbar__list__item">
                    <Link to="/" className="navbar__list__item__link">home</Link>
                </li>

                <li className="navbar__list__item">
                    <Link to="/about" className="navbar__list__item__link">about</Link>
                </li>

                <li className="navbar__list__item">
                    <Link to="/portfolio" className="navbar__list__item__link">portfolio</Link>
                </li>

                <li className="navbar__list__item">
                    <Link to="/testimonials" className="navbar__list__item__link">testimonials</Link>
                </li>

                <li className="navbar__list__item">
                    <Link to="/contact" className="navbar__list__item__link">contact</Link>
                </li>
            </ul>
        </>
    )
}

export default NavList;
