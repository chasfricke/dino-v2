import React from 'react';
import SkillList from "./SkillList";

export const Card = ({ card, toggleClass, styleCondition }) => {
  return <li onClick={() => toggleClass(card)}>
      <div className="profile-card">
        <header className="profile-header">
          <img src={card.image} alt="card image" />
          <h2>{card.name}</h2>
        </header>
        <section className={styleCondition ? 'skills-container hidden' : 'skills-container'}>
          < SkillList card={card} />
        </section>
      </div>
    </li>;
};
