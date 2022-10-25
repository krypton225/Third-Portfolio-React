function Hamburger({ isActiveComponent, toggleClass }) {
    return (
        <>
            <div className={`navbar__hamburger tap-light-remove ${isActiveComponent ? "active" : ""}`} onClick={toggleClass}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default Hamburger;
