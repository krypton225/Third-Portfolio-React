function Hamburger({ openMenu, setOpenMenu }) {
    return (
        <>
            <div className={`navbar__hamburger ${openMenu ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}

export default Hamburger;
