import '../styles/App.css';
import React, { useState } from 'react';
import dataskill from '../Assets/Data/Dataskills.json';

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
