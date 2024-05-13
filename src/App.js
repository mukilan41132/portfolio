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
import "./style.scss";
function App() {
  const [oldId, setOldId] = useState(null);
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
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className='background_style'>
        <nav className="navBar">
        <ul className="nav_flex">
      <li className="tabs-controls__item"><a href="#">Home</a></li>
      <li className="tabs-controls__item"><a href="#" className="tabs-controls__link tabs-controls__link--active" data-id="1" >About</a></li>
      <li className="tabs-controls__item"><a href="#" className="tabs-controls__link" data-id="2" >Skills</a></li>
      <li className="tabs-controls__item"><a href="#" className="tabs-controls__link" data-id="3" >Experience</a></li>
      <li className="tabs-controls__item"><a href="#" className="tabs-controls__link" data-id="4" >Contact me</a></li>
    </ul>
        </nav>
        <aside className="navBarmobile">
          <i classNameName="material-icons" id='icon' onClick={toggleVisibility} >menu</i>
          {isVisible && (
            <ul className="nav_flex">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact me</a></li>
            </ul>
          )}
        </aside>
       
	<section class="cards-container">
		<div class="card card--current" id="1">
    <TextTypefrom text={'Hi! Iam Mukilan  Software Developer'} />
		</div>
		<div class="card" id="2">
    <Skills></Skills>
		</div>
		<div class="card" id="3">
			<h1>C. Consectetur adipisicing elit</h1>
			<p>
				Consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</p>
		</div>
		<div class="card" id="4">
			<h1>D. Sed do eiusmod</h1>
			<p>
				Sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrcaecat cupidatat nonv proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
		<div class="card" id="5">
			<h1>E. Ut enim ad minim veniam</h1>
			<p>
				Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in vo cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
		<div class="card" id="6">
			<h1>F. Labore et dolore magna aliqua</h1>
			<p>
				Labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in volupest laborum.
			</p>
		</div>
 </section> 
{/* </section> */} 
        {/* <div id="home">
          <main>
           
          </main>
        </div>
        <div id="about">

        </div>


        <div id="skills" classNameName='card' >
          <h2 >Skills</h2>
     
        </div>


        <div id="experience">

        </div>

        <div id="contact">

        </div> */}
      </div>
    </>
  );
}

export default App;
// import React, { useState } from 'react';

// function App() {
   

//     return (
//         <div>
//             <div classNameName="tabs-controls">
//                 <a href="#" classNameName="tabs-controls__link" data-id={1} onClick={handleTabClick}>Tab 1</a>
//                 <a href="#" classNameName="tabs-controls__link" data-id={2} onClick={handleTabClick}>Tab 2</a>
//                 {/* Add more tabs as needed */}
//             </div>
//             <div classNameName="card hidden">Tab 1 content</div>
//             <div classNameName="card hidden">Tab 2 content</div>
//             {/* Add more card content as needed */}
//         </div>
//     );
// }

// export default App;
