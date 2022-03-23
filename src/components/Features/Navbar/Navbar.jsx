import React, { useEffect, useState } from 'react'
import './Navbar.css'


export default function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            }
            else {
                handleShow(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>

            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="netflix logo" />

            <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar logo" />

        </div>
    )
}
