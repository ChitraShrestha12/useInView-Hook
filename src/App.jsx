import React, { useEffect, useRef } from "react";
import "./index.css";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: myRefAbout, inView: isVisibleAbout } = useInView();
  const { ref: myRefService, inView: isVisibleService } = useInView();
  console.log("isVisible: ", isVisibleAbout);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Home / Hero Section */}
      <section id="home">
        <h1 className="fade-in-left">Welcome to Our Company</h1>
        <p className="fade-in-right">
          We build modern, responsive, and beautiful websites with React.js
        </p>
        <button onClick={() => (window.location = "#contact")}>
          Get in Touch
        </button>
      </section>

      {/* About Section */}
      <section id="about">
        <h1>About Us</h1>
        <p ref={myRefAbout} className={isVisibleAbout && "fade-in-right"}>
          We are a passionate team of developers and designers creating
          cutting-edge web experiences. Our mission is to transform your ideas
          into reality using modern web technologies.
        </p>
        <p ref={myRefAbout} className={isVisibleAbout && "fade-in-left"}>
          With years of experience in React, UI/UX design, and web development,
          we ensure your website is fast, responsive, and visually stunning.
        </p>
      </section>

      {/* Services Section */}
      <section id="services">
        <h1>Our Services</h1>
        <div className="services-container">
          <div
            ref={myRefService}
            className={`service-card ${
              isVisibleService && "fade-in-left-card"
            }`}
          >
            <h3>Web Development</h3>
            <p>
              Build fast and responsive web applications using modern
              technologies.
            </p>
          </div>
          <div ref={myRefService}
            className={`service-card ${
              isVisibleService && "fade-in-left-card"
            }`}>
            <h3>UI/UX Design</h3>
            <p>
              Design user-friendly and visually appealing interfaces for your
              apps.
            </p>
          </div>
          <div ref={myRefService}
            className={`service-card ${
              isVisibleService && "fade-in-left-card"
            }`}>
            <h3>React Solutions</h3>
            <p>Create scalable and maintainable applications with React.js.</p>
          </div>
          <div ref={myRefService}
            className={`service-card ${
              isVisibleService && "fade-in-left-card"
            }`}>
            <h3>Consulting</h3>
            <p>
              Get expert advice on web development, performance, and best
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h1>Contact Us</h1>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 React Street, Web City</p>
      </section>

      {/* Footer */}
      <footer>&copy; 2025 Your Company. Designed with ❤️ in React.</footer>
    </div>
  );
}

export default App;
