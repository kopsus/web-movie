import React from "react"
import { NavLink, Outlet } from "react-router-dom"

function Root() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Root
