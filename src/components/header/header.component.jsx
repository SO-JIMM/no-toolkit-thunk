import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="link-container">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}
export default Header
