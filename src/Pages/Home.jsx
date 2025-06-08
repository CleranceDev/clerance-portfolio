import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Text,
  OrbitControls,
  Stars,
  Float,
} from "@react-three/drei";
import "./homestyle.scss";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  easeIn,
} from "framer-motion";
import emailjs from "emailjs-com";
import react from "../assets/techstack/reactblue.svg";
import javascript from "../assets/techstack/javascript.svg";
import typescript from "../assets/techstack/TypeScript.svg";
import html from "../assets/techstack/html.svg";
import nodejs from "../assets/techstack/nodejs.svg";
import css from "../assets/techstack/css.svg";
import git from "../assets/techstack/Git.svg";
import github from "../assets/techstack/github.svg";
import mysql from "../assets/techstack/mysql.svg";
import python from "../assets/techstack/python.svg";
import redux from "../assets/techstack/redux.svg";
import mongodb from "../assets/techstack/mongodb.svg";
import scss from "../assets/techstack/scss.svg";
import reactNative from "../assets/techstack/reactnative.svg";
import email from "../assets/techstack/mail.svg";
import phone from "../assets/techstack/phone.svg";
import twitter from "../assets/social media/twitter.svg";
import linkedin from "../assets/social media/linkedin.svg";
import githubtwo from "../assets/social media/github.svg";
import profile from "../assets/images/profile.png";
import ecommerce from "../assets/images/bash.png";

const Earth = (props) => {
  const gltf = useGLTF(`${import.meta.env.BASE_URL}assets/mine.glb`);

  const earthRef = useRef(null);
  useFrame((state, delta) => {
    earthRef.current.position.z = Math.sin(state.clock.elapsedTime) * 0.4;
    earthRef.current.rotation.x = Math.cos(state.clock.elapsedTime) * 0.4;
    earthRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.08;
  });

  return (
    <mesh ref={earthRef}>
      <primitive
        object={gltf.scene}
        scale={[0.3, 0.3, 0.3]}
        position={[0, -4, -2]}
      />
    </mesh>
  );
};

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27p2csh",
        "template_udqsr9m",
        form.current,
        "YSlLQrfEblf3b1uYt"
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send the message, please try again.");
      });
  };

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change");
  const scale = useTransform(scrollY, [17, 550], [0.4, 1]);
  return (
    <div className="container">
      <div className="canvas-wrapper">
        <Canvas className="canvas" camera={{ position: [0, 0, 5], fov: 50 }}>
          <Environment
            environmentIntensity={4}
            files='/assets/pretoria_gardens_2k.hdr'
          />
          <Float
            speed={4} // Speed of floating animation
            rotationIntensity={1.5} // Rotation animation
            floatIntensity={2} // Vertical movement intensity
            floatingRange={[1, 2]} // Range of vertical bounce
          >
            <Earth />
          </Float>

          {/* Optional floating text */}
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={1}
            floatingRange={[1, 0]}
          >
            <Text color="lightblue" position={[0, 0.5, -3.5]} scale={[2, 2, 2]}>
              Hello world
            </Text>
          </Float>

          {/* Starry background */}
          <Stars
            radius={200} // Inner sphere radius
            depth={50} // Area depth
            count={1000} // Number of stars
            factor={15} // Size factor
            color="#00ffff"
            saturation={0} // 0 = white stars
            fade // Fade at edges
            speed={1} // Movement speed
          />

          {/* Orbit controls */}
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
            zoomSpeed={1}
            rotateSpeed={1}
            panSpeed={1}
            minDistance={0}
            maxDistance={Infinity}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
            dampingFactor={0.05}
            autoRotate={false}
            autoRotateSpeed={2}
            target={[0, 0, 0]}
          />
        </Canvas>
      </div>
      <motion.div style={{ scale, transition: easeIn }} className="my-skills">
        <div className="welcome">
          <h1>
            Hello, I'm <span style={{ color: "lightblue" }}>Clerance</span>
          </h1>
          <p>Software and Mobile Fullstack developer based in South Africa</p>
        </div>

        <h2>Skills & About me</h2>
        <div className="about-skills">
          <div className="about-me">
            <img src={profile} alt="" />
            <h1>Clerance Paile</h1>
            <p>
              I'm a software developer based in South Africa with a passion for
              building impactful digital experiences. I specialize in fullstack
              development using modern tools like React, Node.js, Redux, and
              MySQL. From crafting sleek user interfaces to building robust
              backends, I thrive on solving real-world problems through hands-on
              learning and continuous improvement.
            </p>
          </div>

          <div className="skills-container">
            {/* First marquee row (left-to-right) */}
            <div className="marquee-row">
              <div className="marquee">
                {[react, javascript, typescript, html, css, nodejs, git].map(
                  (icon, i) => (
                    <div className="skill-item" key={`top-${i}`}>
                      <img src={icon} alt={icon} />
                      <span>
                        {
                          [
                            "React",
                            "JavaScript",
                            "TypeScript",
                            "HTML5",
                            "CSS3",
                            "Node.js",
                            "Git",
                          ][i]
                        }
                      </span>
                    </div>
                  )
                )}
                {/* Duplicate for seamless looping */}
                {[react, javascript, typescript, html, css, nodejs, git].map(
                  (icon, i) => (
                    <div className="skill-item" key={`top-dup-${i}`}>
                      <img src={icon} alt={icon} />
                      <span>
                        {
                          [
                            "React",
                            "JavaScript",
                            "TypeScript",
                            "HTML5",
                            "CSS3",
                            "Node.js",
                            "Git",
                          ][i]
                        }
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Second marquee row (right-to-left) */}
            <div className="marquee-row">
              <div className="marquee reverse">
                {[github, mongodb, mysql, python, redux, scss, reactNative].map(
                  (icon, i) => (
                    <div className="skill-item" key={`bottom-${i}`}>
                      <img src={icon} alt={icon} />
                      <span>
                        {
                          [
                            "GitHub",
                            "MongoDB",
                            "MySQL",
                            "Python",
                            "Redux",
                            "SCSS",
                            "React Native",
                          ][i]
                        }
                      </span>
                    </div>
                  )
                )}
                {/* Duplicate for seamless looping */}
                {[github, mongodb, mysql, python, redux, scss, reactNative].map(
                  (icon, i) => (
                    <div className="skill-item" key={`bottom-dup-${i}`}>
                      <img src={icon} alt={icon} />
                      <span>
                        {
                          [
                            "GitHub",
                            "MongoDB",
                            "MySQL",
                            "Python",
                            "Redux",
                            "SCSS",
                            "React Native",
                          ][i]
                        }
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="projects">
        <h1>Each project is a unique piece of development</h1>
        <div className="project">
          {/* Left side: Image of the eCommerce website (screenshot) */}
          <div className="project__screenshot">
            <img src={ecommerce} alt="" />
          </div>

          {/* Right side: Description, tech stack, and links */}
          <div className="project__details">
            <h3 className="project__title">E-COMMERCE 🛒</h3>
            <p className="project__description">
              An eCommerce platform that allows users to browse and purchase
              products online. The site features product search, filtering, a
              shopping cart, and secure checkout. It offers a seamless
              experience for both desktop and mobile users.
            </p>
            <div className="project__stack">
              <span>React</span>
              <span>Redux</span>
              <span>SCSS</span>
              <span>Tanstack</span>
              <span>Nodejs</span>
              <span>Express</span>
              <span>JWT</span>
              <span>bcrypt</span>
              <span>Mysql</span>
            </div>
            <div className="project__links">
              <a href="#" className="project__link">
                Code
              </a>
              <a href="#" className="project__link project__link--demo">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="contact-me"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          <span className="coffee-icon">☕</span>
          Let's Connect & Collaborate
          <span className="coffee-icon">☕</span>
        </h2>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-item">
              <div className="icon-wrapper">
                <img src={email} alt="Email" className="contact-icon" />
              </div>
              <div className="contact-details">
                <span className="contact-label">EMAIL ME AT</span>
                <a href="mailto:clerance@example.com" className="contact-value">
                  : clerancedev@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <img src={phone} alt="Phone" className="contact-icon" />
              </div>
              <div className="contact-details">
                <span className="contact-label">CALL ME AT</span>
                <a href="tel:+27123456789" className="contact-value">
                  : 079 075 6717
                </a>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/CleranceDev"
                target="_blank"
                className="social-icon"
                aria-label="GitHub"
              >
                <img src={githubtwo} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/clerance-paile"
                target="_blank"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name" // <-- added name attribute
                placeholder=" "
                className="form-input"
                required
              />
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email" // <-- added name attribute
                placeholder=" "
                className="form-input"
                required
              />
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message" // <-- added name attribute
                rows="3"
                placeholder=" "
                className="form-input"
                required
              ></textarea>
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <svg className="send-icon" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
