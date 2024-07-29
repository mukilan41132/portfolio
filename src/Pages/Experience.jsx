import '../styles/App.css';
import React, { useState, useEffect } from 'react';


function Experience() {
  const WebSite = () => { }


  return (
    <>
      <div>
        <h3 className='Title'>Work Experience</h3>
        <p className='content'>2023Aug - Present | Chennai</p>
        <p><a onClick={WebSite}>Acumen technology pvt ltd</a>| Software Developer</p>
        <p className='content'>Developed and maintained web applications with React and TypeScript.</p>
        <p className='content'>Implemented state management using Redux.</p>
        <p className='content'>Created responsive UI's with Material-UI and Bootstrap.</p>
        <p className='content'>Collaborated with designers and backend developers to integrate APIs.</p>
        <p className='content'>Wrote clean, modular, reusable code following industry standards.</p>
      </div>
    </>
  );
}

export default Experience;