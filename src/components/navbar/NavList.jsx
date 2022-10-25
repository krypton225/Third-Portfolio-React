import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import NavListItems from './NavListItems';

function NavList({ isActiveComponent, toggleClass }) {

    return (
        <>
            <ul className={`navbar__list ${isActiveComponent ? "active" : ""}`} onClick={toggleClass}>
                <CloseIcon id="close-icon" onClick={toggleClass} />
                <NavListItems />
            </ul>
        </>
    )
}

export default NavList;
