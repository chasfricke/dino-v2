import React from 'react';

class SkillList extends React.Component {
  render() {
    return (
        <div>
            <h4>Skills</h4>
            <ul className="skills-list">{this.props.card.skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
        </div>
        
    );
  }
}

export default SkillList;