import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
   <nav>
  <div class="logo">
    {/* <img src="../../../public/favicon.ico" alt="Logo Image" /> */}
  </div>
  <div class="hamburger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
  </div>
  <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><button class="login-button" href="#">Login</button></li>
      <li><button class="register-button" href="#">Register</button></li>
  </ul>
</nav>



    </div>
  );
};

export default Navbar;
