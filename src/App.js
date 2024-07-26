import './styles/App.css';

import TextTypefrom from "./components/Typingeffect";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Skills from "./components/Skills";
import React, { useState, useEffect } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contactme';
import "./styles/scss-style/style.scss";
import Typewriter from 'typewriter-effect';
import Profile from './components/Profile';
function App() {
  const [oldId, setOldId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const currentId = parseInt(e.currentTarget.getAttribute('data-id'), 10);
      if (currentId === oldId) {
        return;
      }
      const timing = document.querySelectorAll('.card.hidden').length * 100;
      document.querySelectorAll('.tabs-controls__link--active').forEach(link => {
        link.classList.remove('tabs-controls__link--active');
      });
      e.currentTarget.classList.add('tabs-controls__link--active');
      if (currentId < oldId) {
        document.querySelectorAll('.card').forEach((card, index) => {
          if (index >= (currentId - 1)) {
            setTimeout(() => {
              card.classList.remove('hidden');
            }, timing - (index * 100));
          }
        });
      } else {
        document.querySelectorAll('.card').forEach((card, index) => {
          if (index < (currentId - 1)) {
            setTimeout(() => {
              card.classList.add('hidden');
            }, index * 100);
          }
        });
      }

      setOldId(currentId);
    };
    document.querySelectorAll('.tabs-controls__link').forEach(link => {
      link.addEventListener('click', handleClick);
    });
    return () => {
      document.querySelectorAll('.tabs-controls__link').forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [oldId]);

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


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className='background_style'>
        <nav className="navBar">
          <ul className="nav_flex">
            <li className="tabs-controls__item">
              <a href="#" className="tabs-controls__link tabs-controls__link--active" data-id="1">Home</a>
            </li>
            <li className="tabs-controls__item">
              <a href="#" className="tabs-controls__link" data-id="2" >About</a>
            </li>
            <li className="tabs-controls__item">
              <a href="#" className="tabs-controls__link" data-id="3" >Skills</a>
            </li>
            <li className="tabs-controls__item">
              <a href="#" className="tabs-controls__link" data-id="4" >Experience</a>
            </li>
            <li className="tabs-controls__item">
              <a href="#" className="tabs-controls__link" data-id="5" >Contact me</a>
            </li>
          </ul>
        </nav>
        <aside className="navBarmobile">
          <i className="material-icons" id='icon' onClick={toggleVisibility} >menu</i>
          {isVisible && (
            <ul className="nav_flex">
              <li className="tabs-controls__item">
                <a href="#" className="tabs-controls__link tabs-controls__link--active" data-id="1">Home</a>
              </li>
              <li className="tabs-controls__item">
                <a href="#" className="tabs-controls__link" data-id="2" >About</a>
              </li>
              <li className="tabs-controls__item">
                <a href="#" className="tabs-controls__link" data-id="3" >Skills</a>
              </li>
              <li className="tabs-controls__item">
                <a href="#" className="tabs-controls__link" data-id="4" >Experience</a>
              </li>
              <li className="tabs-controls__item">
                <a href="#" className="tabs-controls__link" data-id="5" >Contact me</a>
              </li>
            </ul>
          )}
        </aside>
        <section className='section'>
          <section class="cards-container">
            <div class="card card--current" id="1">
              <div style={{display:"flex",justifyContent:"center"}}>
                <Typewriter

                  options={{
                    wrapperClassName: "title",
                    strings: ['Hi! I Am Mukilan Software Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <Profile />
            </div>
            <div class="card" id="2">
              <h1>About Me</h1>
              <About />
            </div>
            <div class="card" id="3">
              <h1>Programming Skills</h1>
              <Skills />

            </div>
            <div class="card" id="4">
              <h1>Experience</h1>
              <Experience />
            </div>
            <div class="card" id="5">
              <h1>Contact Me</h1>
              <Contact />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;

