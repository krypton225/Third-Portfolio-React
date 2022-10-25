import { Link } from "react-router-dom"

function Logo() {
    return (
        <>
            <h1 className="navbar__logo">
                <Link to="/" className="navbar__logo__text">
                    Patrick<span>.</span>
                </Link>
            </h1>
        </>
    )
}

export default Logo
