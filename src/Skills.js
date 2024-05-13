import logo from './logo.svg';
import './App.css';
import Header from '../src/Header';
import TextTypefrom from "./Typingeffect"
import javascript from "./im/javascript.jpeg";
import mongodb from "./im/mongo db.jpeg";
import ts from "./im/ts.jpeg";
import React, { useState, useEffect } from 'react';
import nodejs from "./im/nodejs.jpeg";
import mysql from "./im/mysql.jpeg";
import python from "./im/python.jpg";
import mono from "./im/mono.jpeg";
import css from "./im/css-3.png";
import html from "./im/html-5.png";
import dataskill from './Data/Dataskills.json';

function Skills() {
  const [Dataskill, setDataskill] = useState(dataskill);


  return (
    <>
      <div className='container'>
        {Dataskill.map((Skill, index) => (
          <div className='container_card' key={index}>
            <img className='img_style' src={Skill.img}  />
            <p className='fsw'>{Skill.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
