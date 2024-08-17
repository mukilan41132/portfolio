import '../styles/App.css';
import React from 'react';
import dataskill from '../Assets/Data/Dataskills.json';
import '../styles/Skills.css'
function Skills() {

  const Dataskill = dataskill
  return (
    <>
      <div className='container'>
        {Dataskill.map((Skill, index) => (
          <div className='container_card' key={index}>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p class="title">FLIP CARD</p>
                  <p>{Skill.title}</p>
                </div>
                <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
                </div>
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </>
  );
}

export default Skills;
