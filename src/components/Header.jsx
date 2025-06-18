import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import logo from '../assets/images/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef(null)
  const navLinksRef = useRef([])

  const openSidebar = () => {
    gsap.to(sidebarRef.current, {
      x: 0,
      duration: 0.5,
      ease: "power3.out",
      onStart: () => {
        sidebarRef.current.style.pointerEvents = "auto"
        document.body.classList.add("no-scroll")
      }
    })

    gsap.from(navLinksRef.current, {
      opacity: 0,
      x: 50,
      stagger: 0.1,
      delay: 0.2,
      duration: 0.6,
      ease: "power2.out",
    })

    setIsOpen(true)
  }

  const closeSidebar = () => {
    gsap.to(sidebarRef.current, {
      x: "100%",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        sidebarRef.current.style.pointerEvents = "none"
        document.body.classList.remove("no-scroll")
      }
    })

    setIsOpen(false)
  }

  const handleMenuClick = () => {
    if (!isOpen) openSidebar()
  }

  const handleCloseClick = () => {
    if (isOpen) closeSidebar()
  }

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <img src={logo} alt="logo" width="80px" />
        </a>

        <ul className="nav-menu">
          <li className="nav-item"><a href="#">Game</a></li>
          <li className="nav-item"><a href="#">Agents</a></li>
          <li className="nav-item"><a href="#">News</a></li>
          <li className="nav-item"><a href="#">Esports</a></li>
        </ul>

        <a href="#" className="nav-cta-button">PLAY NOW</a>

        <div className="menu-icon" onClick={handleMenuClick}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      <aside className="mobile-sidebar" ref={sidebarRef}>
        <div className="sidebar-header">
          <span className="close-sidebar" onClick={handleCloseClick}>&times;</span>
        </div>

        <ul className="mobile-nav-menu">
          <li className="mobile-nav-item" ref={el => navLinksRef.current[0] = el}>
            <a href="#">Game</a>
          </li>
          <li className="mobile-nav-item" ref={el => navLinksRef.current[1] = el}>
            <a href="#">Agents</a>
          </li>
          <li className="mobile-nav-item" ref={el => navLinksRef.current[2] = el}>
            <a href="#">News</a>
          </li>
          <li className="mobile-nav-item" ref={el => navLinksRef.current[3] = el}>
            <a href="#">Esports</a>
          </li>
        </ul>

        <a href="#" className="mobile-nav-cta-button">PLAY NOW</a>
      </aside>
    </header>
  )
}

export default Header 