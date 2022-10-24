function Hamburger({ isActiveComponent, toggleClass }) {
    return (
        <>
            <div className={`navbar__hamburger ${isActiveComponent ? "active" : ""}`} onClick={toggleClass}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default Hamburger;
