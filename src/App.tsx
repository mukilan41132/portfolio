import './styles/App.css';
import Skills from "./Pages/Skills";
import React, { useState, useEffect } from 'react';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Contact from './Pages/Contactme';
import "./styles/scss-style/style.scss";
import Typewriter from 'typewriter-effect';
import Profile from './Pages/Profile';
const App: React.FC = () => {

  const [oldId, setOldId] = useState<number | null>(null);
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
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      const currentId = parseInt(target.getAttribute('data-id') ?? '0', 10);

      if (oldId !== null && currentId === oldId) {
        return;
      }

      const timing = document.querySelectorAll('.card.hidden').length * 100;
      document.querySelectorAll('.tabs-controls__link--active').forEach(link => {
        link.classList.remove('tabs-controls__link--active');
      });
      target.classList.add('tabs-controls__link--active');

      if (oldId !== null) {
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
      }

      setOldId(currentId);
    };

    // Type assertion to specify the event type
    const links = document.querySelectorAll('.tabs-controls__link') as NodeListOf<HTMLElement>;

    links.forEach(link => {
      link.addEventListener('click', handleClick as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as EventListener);
      });
    };
  }, [oldId]);

  const smoothScrollTo = (target: HTMLElement, duration: number) => {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollY = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollY);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className='background_style'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item tabs-controls__item">
                  <a className="tabs-controls__link tabs-controls__link--active" data-id="1">Home</a>
                </li>
                <li className="nav-item tabs-controls__item">
                  <a className="tabs-controls__link" data-id="2">About</a>
                </li>
                <li className="nav-item tabs-controls__item">
                  <a className="tabs-controls__link" data-id="3" >
                    Skills
                  </a>
                </li>
                <li className="nav-item tabs-controls__item">
                  <a className="tabs-controls__link" data-id="4" >Experience</a>
                </li>
                <li className="nav-item tabs-controls__item">
                  <a className="tabs-controls__link" data-id="5" >Contact Me</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        {/* <nav className="navBar">
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
        </nav>*/}
        <section className='section'>
          <section className="cards-container">
            <div className="card card--current" id="1">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typewriter options={{ wrapperClassName: "title", strings: ['Hi! I Am Mukilan Software Developer'], autoStart: true, loop: true, }} />
              </div>
              <Profile />
            </div>
            <div className="card" id="2">
              <h1>About Me</h1>
              <About />
            </div>
            <div className="card" id="3">
              <h1>Programming Skills</h1>
              <Skills />

            </div>
            <div className="card" id="4">
              <h1>Experience</h1>
              <Experience />
            </div>
            <div className="card" id="5">
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

