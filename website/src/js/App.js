/* CSS */
import '../css/App.css';

/*Icons */
import GITHUB from '../assets/icons/github-512.png';

import PYTHON from '../assets/icons/python-icon.png';
import JAVA from '../assets/icons/java-icon.png';
import SWIFT from '../assets/icons/swift-icon.png';
import CPLUSPLUS from '../assets/icons/cplusplus-icon.png';
import C from '../assets/icons/c-icon.png';
import HTML from '../assets/icons/html-icon.png';
import CSS from '../assets/icons/css-icon.png';
import JS from '../assets/icons/javascript-icon.png';
import NODEJS from '../assets/icons/nodejs-icon.png';
import REACT from '../assets/icons/react-icon.png';
import PHP from '../assets/icons/php-icon.png';
import MYSQL from '../assets/icons/mysql-icon.png';
import MONGODB from '../assets/icons/mongodb-icon.png';
import GIT from '../assets/icons/git-icon.png';
import SAP from '../assets/icons/sap-icon.png';
import FIGMA from '../assets/icons/figma-icon.png';
import CANVA from '../assets/icons/canva-icon.png';
import VIRTUALBOX from '../assets/icons/oracle-icon.png';
import TRELLO from '../assets/icons/trello-icon.png';
import OFFICE from '../assets/icons/office-icon.png';

import ARROW from '../assets/icons/back-arrow.png';

import CERTIFICATES from '../assets/certificates/certificates.zip'

/*Images */
import RITHIK from '../assets/images/rithik.png';
import PROJECTS_ARROW from '../assets/images/projects-arrow.png';

/* BOOTHLINK */
import BOOTHLINK_ORG_SELECTOR from '../assets/images/boothlink/org-selector.png';
import BOOTHLINK_HOME from '../assets/images/boothlink/login.png';
import BOOTHLINK_LOGIN from '../assets/images/boothlink/home.png';

/* BOGGLE */
import BOGGLE_SETTINGS from '../assets/images/boggle/settings.png';
import BOGGLE_HOME from '../assets/images/boggle/home.png';
import BOGGLE_QUEUE from '../assets/images/boggle/queue.png';

/* TURO */
import TURO_INFO from '../assets/images/turo/applicant-info.png';
import TURO_APPLICANT from '../assets/images/turo/applicant.png'
import TURO_SIGNUP from '../assets/images/turo/signup.png'

/* IBALL */
import IBALL_HOME from '../assets/images/i-ball/home.png';
import IBALL_LOGIN from '../assets/images/i-ball/login.png'
import IBALL_MERCH from '../assets/images/i-ball/merch.png'
/* Others */
import { motion, AnimatePresence, animate } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";

const navVariants = {
  hover : {
    scale:1.2, 
    color:'#2E2111',
    zIndex:500
  }
}


function Head() {
  return (
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </header>
  );
}

function NavBar() {
  const [navbarColor, setNavbarColor] = useState("#333"); // Default color
  const [textColor, setTextColor] = useState("#fff");

  useEffect(() => {
      const sections = document.querySelectorAll(".card");
      console.log(sections)

      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      const bgColor = window.getComputedStyle(entry.target).backgroundColor;
                      console.log("BG", bgColor)
                      
                      if (bgColor === "rgb(228, 120, 57)") { // Example: Orange background
                          setTextColor("#FEF2C4"); // White text
                      } else {
                        setTextColor("#2E2111"); // Dark text

                      }
                  }
              });
          },
          { threshold: 0.8 } // Trigger when 50% of a section is visible
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
  }, []);


  return (
    <nav id="nav">
          <h4 id="tank" style={{  color: textColor }}>tank</h4>
            <motion.ul id="nav-main">
              <motion.li className="nav-option"
                variants={navVariants}
                whileHover="hover"
                  > <a href ="#home" className='selected' style={{  color: textColor }} >Home </a>
              </motion.li>
              <motion.li className="nav-option"
                variants={navVariants}
                whileHover="hover"
                  > <a href="#about" style={{  color: textColor }}>About</a>
              </motion.li>
              <motion.li className="nav-option"
                variants={navVariants}
                whileHover="hover"
                  > <a href="#projects" style={{  color: textColor }}>Projects</a>
              </motion.li>
            </motion.ul>
            <div id = "contact" style={{  border: `2px solid ${textColor}` }}>
                <li> <a id="contact-a" href="#contactCard" style={{  color: textColor }}>Contact </a>
                </li>
              </div>
    </nav>
  )
}


const miniCardVariants = {
  init : {
    rotateZ:-30, 
    scale:.25,
    y:'-100vw',
  },
  animate : {
    rotateZ: 2, 
    scale:1.1, 
    y:-70,
    transition : {
      type: 'tween',
      mass:1.5, 
      damping: 20,
      stiffness: 75,
      duration:1
      /*when: */
    }
  }, 
  animate2 : {
    rotateZ: 20, 
    scale:.3, 
    y:-50,
    opacity:.5,
    transition : {
      type: 'tween',
      mass:1.5, 
      damping: 20,
      stiffness: 75,
      /*when: */
    }
  },
  hover : {
    rotateZ: 0,
    scale: 1.5,
  }
}


function Home() {
  const { ref, inView } = useInView({
    threshold: 0.7, // Trigger when 50% of the element is visible
  })

  return (
    <div id="home" className="card">  
      <motion.div className="miniCard" 
        variants={miniCardVariants}
        initial="init"
        ref={ref}
        animate={inView ? "animate" : "animate2"}
        whileHover="hover"
      >
        <h2>Rithik Tank</h2>
        <h4 className="h4-orange">Bachelor of Science in Computer Science</h4>
        <div id="github-div">
          <img src={GITHUB} className="icon"/>
          <a href="https://github.com/rethinkwhat" className="github-link"> Visit my Github</a>
        </div>
      </motion.div>
      <script src="./script.js" type="module"></script>
    </div>
  );
}

const aboutImgVariants = {
  init : {
    x: '-100vw'
  },
  animate : {
    x: '0vw',
    zIndex: 1,
    transition : {
      duration:1,

    }
  },
  animate2 : {}
}

const aboutVariants = {
  init : {
      x:'58vw'
  },
  init2 : {
    x:'-92vw'
  },
  animate : {
      x:'0vh',
      transition : {
        type: 'inertia',
        velocity: 100,
        power: 1,
        zIndex: 0,
        /*when: */
      }
   // x: '100vw',
  },
  animate2 : {
   // x: '0vw',
  }
}

function About() {
  const { ref, inView } = useInView({
    threshold: 0.01,
  })

  return (
    <div id="about" className="card">
      <motion.div id="about-left"
          variants={aboutImgVariants}
          initial="init"
          //animate= "animate"
          ref={ref}
          animate={inView ? "animate" : "animate2"}
      >
        <h3>Rithik Tank</h3>
        <h4 className='h4-laila'>Bachelor of Science in Computer Science</h4>
        <img src={RITHIK} alt="ME" id="about-img"/>
      </motion.div>
      <div id="about-right">
        <motion.div className='about-row'         
        variants={aboutVariants}
        initial="init"
        ref={ref}
        animate={inView ? "animate" : "animate2"}
        >
          <div className='about-lang-div'>
            <img className='about-icon' src={ PYTHON }/>
            <h4 className='about-h4'>Python</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ JAVA }/>
            <h4 className='about-h4'>Java</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ SWIFT }/>
            <h4 className='about-h4'>Swift</h4>
          </div>
          <div className='about-lang-div'>
          <img className='about-icon' src={ CPLUSPLUS }/>
            <h4 className='about-h4'>C++</h4>
          </div>

          <div className='about-lang-div'>
          <img className='about-icon' src={ C }/>
            <h4 className='about-h4'>C</h4>
          </div>
        </motion.div>
        <motion.div className='about-row'         
        variants={aboutVariants}
        initial="init2"
        ref={ref}
        animate={inView ? "animate" : "animate2"}
        >
          <div className='about-lang-div'>
            <img className='about-icon' src={ HTML }/>
            <h4 className='about-h4'>HTML</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ CSS }/>
            <h4 className='about-h4'>CSS</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ JS }/>
            <h4 className='about-h4'>JavScript</h4>
          </div>

          <div className='about-lang-div'>
          <img className='about-icon' src={ NODEJS }/>
            <h4 className='about-h4'>NodeJS</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ REACT }/>
            <h4 className='about-h4'>React</h4>
          </div>
        </motion.div>

        <motion.div className='about-row'         
        variants={aboutVariants}
        initial="init"
        ref={ref}
        animate={inView ? "animate" : "animate2"}
        >
          <div className='about-lang-div'>
            <img className='about-icon' src={ PHP }/>
            <h4 className='about-h4'>PHP</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ MYSQL }/>
            <h4 className='about-h4'>MYSQL</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ MONGODB }/>
            <h4 className='about-h4'> MongoDB</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ GIT }/>
            <h4 className='about-h4'>Git</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ SAP }/>
            <h4 className='about-h4'>SAP</h4>
          </div>
        </motion.div>

        <motion.div className='about-row'         
        variants={aboutVariants}
        initial="init2"
        ref={ref}
        animate={inView ? "animate" : "animate2"}
        >
          <div className='about-lang-div'>
            <img className='about-icon' src={ FIGMA }/>
            <h4 className='about-h4'>Figma</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ CANVA }/>
            <h4 className='about-h4'>Canva</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ VIRTUALBOX }/>
            <h4 className='about-h4'> VirtualBox</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ TRELLO }/>
            <h4 className='about-h4'>Trello</h4>
          </div>

          <div className='about-lang-div'>
            <img className='about-icon' src={ OFFICE }/>
            <h4 className='about-h4'>Office</h4>
          </div>
        </motion.div>
        <motion.a id='cert-download'className='h4-laila' href={ CERTIFICATES } download
          whileHover= {{scale:'1.5' }}
        >
          View Certificates
        </motion.a>

        
      </div>
    </div>
  )
}

const projectsVariants = {
  init : {
      x:'-20vw'
  },
  init2 : {
    x:'20vw'
  },
  animate : {
      x:'0vh',
      transition : {
        type: 'tween',
        mass:1.5, 
        damping: 20,
        stiffness: 75,
        duration:1
        /*when: */
      }
  },
  animate2 : {
     // x:'-50vw'
  }
}

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.01, 
  })

  return (
    <div id="projects" className="card">
      <motion.div id="projects-left"
        variants={projectsVariants}
        initial="init"
        //animate='animate'
        ref={ref}
        animate={inView ? "animate" : "animate2"}
      >
        <h1>projects</h1> 
        <h1>made</h1>
        <img id="projects-arrow" src={PROJECTS_ARROW}></img>
      </motion.div>
      <motion.div id="projects-right"
        variants={projectsVariants}
        initial="init2"
        //animate="animate"
        ref={ref}
        animate={inView ? "animate" : "animate2"}
      >
        <a href = "#turo">
          <motion.div className="projects-bg-div-light" 
          animate={{rotateZ: 5, x:0}} initial={{rotateZ: -20, x:-250}} whileHover={{rotateZ:0, scale:1.5, zIndex:1000}} style={{ zIndex: 1 }}>
            <h5> turo</h5>
          </motion.div>
        </a>

        <a href = "#boggle">
          <motion.div className="projects-bg-div-dark" animate={{rotateZ: -5, x:0}} initial={{rotateZ: -20,x:-250}} whileHover={{rotateZ:0, scale:1.5, zIndex:1000}} style={{ zIndex: 3 }}>
            <h5 id="h5-light">boggle</h5>
          </motion.div>
        </a>
        <a href = "#i-ball">
          <motion.div className="projects-bg-div-light" animate={{rotateZ: 5, x:0}} initial={{rotateZ: -20,x:-250}} whileHover={{rotateZ:0, scale:1.5, zIndex:1000}} style={{ zIndex: 1 }}>
            <h5>i-ball</h5>
          </motion.div>
        </a>
        <a href="#boothlink">
          <motion.div className="projects-bg-div-dark" animate={{rotateZ: -5, x:0}} initial={{rotateZ: -20,x:-250}} whileHover={{rotateZ:0, scale:1.5, zIndex:1000}} style={{ zIndex: 1 }}>
            <h5 id="h5-light">boothlink</h5>
          </motion.div>
        </a>
      </motion.div>
    </div>
  )
}


const projectVariants = {
animate : {
    x:'0vw',
    transition : {
      type: 'tween',
      mass:2.5, 
      damping: 200,
      stiffness: 15,
      duration:.5
      /*when: */
    }
},
animate2 : {
    x:'-20vw'
}
}

function Project({ project, desc, img1, img2, img3, id} ) {
  const { ref, inView } = useInView({
    threshold: 0.01, 
  })

  return (
    <div id={id} className='card'>
      <div id="project-left">
        <a href="#projects">
          <img id = "project-arrow" src={ARROW} alt="back"></img>
        </a>

        <motion.div id="project-img-container-1" animate={{rotateZ: 2, x:0}} whileHover={{rotateZ:0, scale:1.2, zIndex:1000}} >
          <motion.img className="inner-img" src={img1} ref={ref} variants={projectVariants} initial='init' animate={inView ? "animate" : "animate2"} ></motion.img>
        </motion.div>

        <motion.div id="project-img-container-2" animate={{rotateZ: -2, x:0}} whileHover={{rotateZ:0, scale:1.2, zIndex:1000}}>
        <motion.img className="inner-img" src={img2} ref={ref} variants={projectVariants} initial='init' animate={inView ? "animate" : "animate2"} ></motion.img>
        </motion.div>

      </div>
      <div id="project-right">
      <motion.div id="project-img-container-3" animate={{rotateZ: -6, x:0}} whileHover={{rotateZ:0, scale:1.2, zIndex:10000000}}>
      <motion.img className="inner-img" src={img3} ref={ref} variants={projectVariants} initial='init' animate={inView ? "animate" : "animate2"} ></motion.img>
        </motion.div>
        <motion.div className='project-text-div' ref={ref} variants={projectVariants} initial='init' animate={inView ? "animate" : "animate2"}>
          <h5 id="h5-light">{ project }</h5>
        </motion.div>
        <motion.div className='project-desc-div' ref={ref} variants={projectVariants} initial='init' animate={inView ? "animate" : "animate2"}>
          <h3 className='h3-light'>{ desc }</h3>
        </motion.div>
      </div>

     </div>
  )
}

const contactVariants = {
  init_left : {
      x: '-50vw'
  }, 

  animate_left : {
      x: '0vw',
      transition: {
        duration: .5
      }
  },

  init_right : {
      x: '50vw'
  },

  animate_right : {
      x: '0vw',
      transition: {
        duration: .5
      }

  }
}

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.01, 
  })

  return (
    <div id="contactCard" className='card'>
        <motion.h3 id="contact-me"
          variants={contactVariants}
          initial='init_right'
          //animate='animate_right'
          ref={ref}
          animate={inView ? "animate_right" : ""}
            >Contact Me
        </motion.h3>
        <motion.div className='contact-row'
          variants={contactVariants}
          initial='init_left'
          ref={ref}
          animate={inView ? "animate_left" : ""}
        >
            <h4 className="contact-desc">PERSONAL</h4>
            <h3 className='contact-deets'>RITHIKTANK358@GMAIL.COM</h3>
        </motion.div>
                <motion.div className='contact-row'
          variants={contactVariants}
          initial='init_right'
          ref={ref}
          animate={inView ? "animate_right" : ""}
        >
            <h4 className="contact-desc">SCHOOL</h4>
            <h3 className='contact-deets'>2233293@SLU.EDU.PH</h3>
        </motion.div>
                <motion.div className='contact-row'
          variants={contactVariants}
          initial='init_left'
          ref={ref}
          animate={inView ? "animate_left" : ""}
        >
            <h4 className="contact-desc">PHONE</h4>
            <h3 className='contact-deets'>+639177900153</h3>
        </motion.div>
                <motion.div className='contact-row'
          variants={contactVariants}
          initial='init_right'
          ref={ref}
          animate={inView ? "animate_right" : ""}
        >
            <h4 className="contact-desc">GITHUB</h4>
            <h3 className='contact-deets'>GITHUB.COM/RETHINKWHAT</h3>
        </motion.div>
    </div>
  )
}


function Page() {
  return (
    <>
      < Head />
      < NavBar />
      < Home />
      < About />
      < Projects />
      < Project project="boothlink" desc="An app that allows students to make reservations!" img1={BOOTHLINK_LOGIN} img2={BOOTHLINK_ORG_SELECTOR} img3={BOOTHLINK_HOME} id="boothlink" />
      < Project project="boggle" desc="A game that draws inspiration from word factory!" img1={BOGGLE_HOME} img2={BOGGLE_QUEUE} img3={BOGGLE_SETTINGS} id="boggle" />
      < Project project="turo" desc="A mobile app to connect students and tutors!" img1={TURO_SIGNUP} img2={TURO_APPLICANT} img3={TURO_INFO} id="turo" />
      < Project project="i-ball" desc="A social platform to connect idols to their fans!" img1={IBALL_HOME} img2={IBALL_LOGIN} img3={IBALL_MERCH} id="i-ball" />
      < Contact />
    </>
  )

}


export default Page;
