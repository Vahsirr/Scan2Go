import React from 'react'
import {Link} from 'react-router-dom'
import imgage2 from './imgage2.png';
const Customernavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <img className="navbar-brand rounded-circle" height={60} width={80} src={imgage2}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item px-2">
          <Link className="nav-link active rounded-3" style={{backgroundColor:"rgb(84, 84, 84)"}} href="#">Home</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link active rounded-3" style={{backgroundColor:"rgb(84, 84, 84)"}} href="#">Scan2Go</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link active rounded-3" style={{backgroundColor:"rgb(84, 84, 84)"}} href="#">My Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Customernavbar