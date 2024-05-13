import logo from './logo.svg';
import './App.css';
import Header from '../src/Header';
import TextTypefrom from "./Typingeffect";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Skills from "./Skills";
import React, { useState, useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Contact from './Contactme';
import dataskill from './Data/Dataskills.json';
function App() {

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {

          if (targetId === 'skills') {
            smoothScrollTo(targetElement, 1000);
          } else {
            smoothScrollTo(targetElement, 500);
          }
        }
      });
    });
  }, []);
const [oldId, setOldId] = useState(null);

const handleTabClick = (e) => {
    e.preventDefault();

    const clickedId = parseInt(e.currentTarget.getAttribute('data-id'), 10);

    if (clickedId === oldId) {
        return;
    }

    document.querySelectorAll('.tabs-controls__link--active').forEach(link => {
        link.classList.remove('tabs-controls__link--active');
    });
    e.currentTarget.classList.add('tabs-controls__link--active');

    if (clickedId < oldId) {
        const timing = document.querySelectorAll('.card.hidden').length * 100;
        document.querySelectorAll('.card').forEach((card, index) => {
            if (index >= (clickedId - 1)) {
                setTimeout(() => {
                    card.classList.remove('hidden');
                }, timing - (index * 100));
            }
        });
    } else {
        document.querySelectorAll('.card').forEach((card, index) => {
            if (index < (clickedId - 1)) {
                setTimeout(() => {
                    card.classList.add('hidden');
                }, index * 100);
            }
        });
    }

    setOldId(clickedId);
};
  const smoothScrollTo = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollY = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollY);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className='background_style'>
        <nav className="navBar">
          <ul className="nav_flex">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
        <aside className="navBarmobile">
          <i className="material-icons" id='icon' onClick={toggleVisibility} >menu</i>
          {isVisible && (
            <ul class="nav_flex">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact me</a></li>
            </ul>
          )}
        </aside>
        <div id="home">
          <main>
            <TextTypefrom text={'Hi! Iam Mukilan  Software Developer'} />
          </main>
        </div>

        <div id="about">

        </div>


        <div id="skills" className='maincontainer'>
          <h2 >Skills</h2>
          <Skills></Skills>
        </div>


        <div id="experience">

        </div>

        <div id="contact">

        </div>
      </div>
    </>
  );
}

export default App;
// import React, { useState } from 'react';

// function App() {
   

//     return (
//         <div>
//             <div className="tabs-controls">
//                 <a href="#" className="tabs-controls__link" data-id={1} onClick={handleTabClick}>Tab 1</a>
//                 <a href="#" className="tabs-controls__link" data-id={2} onClick={handleTabClick}>Tab 2</a>
//                 {/* Add more tabs as needed */}
//             </div>
//             <div className="card hidden">Tab 1 content</div>
//             <div className="card hidden">Tab 2 content</div>
//             {/* Add more card content as needed */}
//         </div>
//     );
// }

// export default App;
