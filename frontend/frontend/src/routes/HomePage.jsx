import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">

      {/* HEADER */}
      <header className="home-header">
        <div className="home-logo">🏥</div>
        <h1 className="home-title">Healthcare Portal</h1>

        <div className="home-buttons">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/register" className="btn btn-signup">Sign Up</Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-left">
          <h2>Empowering Patients & Doctors</h2>
          <p>
            Track your daily health goals, receive recommendations, and get connected 
            with your healthcare provider. A smarter way to stay healthy.
          </p>

          <Link to="/login" className="btn btn-start">Get Started</Link>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/medical-care-3d-icon-6479698-5348280.png"
            alt="Healthcare illustration"
            className="hero-img"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <p>HCL Hackathon Project</p>

        <div className="footer-contacts">
          <p>Mohit — 12213016@nitkkr.ac.in</p>
          <p>Nikhil — nikhil@nitkkr.ac.in</p>
          <p>Utkarsh — utkarsh@nitkkr.ac.in</p>
          <p>Ankur — ankur@nitkkr.ac.in</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
