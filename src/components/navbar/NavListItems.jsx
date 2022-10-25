import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavListItems = () => {

    const [items, setItems] = useState([
        { idItem: 1, itemName: "home", itemLink: "/" },
        { idItem: 2, itemName: "about", itemLink: "/about" },
        { idItem: 3, itemName: "portfolio", itemLink: "/portfolio" },
        { idItem: 4, itemName: "testimonials", itemLink: "/testimonials" },
        { idItem: 5, itemName: "contact", itemLink: "/contact" }
    ]);

    return (
        items.map((item) => {
            return <li key={item.idItem} className="navbar__list__item">
                <Link to={item.itemLink} className="navbar__list__item__link">{item.itemName}</Link>
            </li>
        })
    )
}

export default NavListItems
