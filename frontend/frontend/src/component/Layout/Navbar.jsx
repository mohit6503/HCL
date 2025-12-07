// src/components/layout/Navbar.jsx
function Navbar() {
  return (
    <header className="top-nav">
      <div className="logo">Healthcare Portal</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#topics">Health Topics</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;