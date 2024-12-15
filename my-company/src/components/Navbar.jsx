// src/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '10px', 
      backgroundColor: '#f1f1f1',
      display: 'flex',             // Use flexbox for layout
      justifyContent: 'space-around'  // Evenly space out the items
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
      <Link to="/services" style={{ textDecoration: 'none', color: 'black' }}>Services</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
