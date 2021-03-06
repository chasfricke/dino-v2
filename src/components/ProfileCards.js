import React from 'react';
import { Card } from './Card';

class ProfileCards extends React.Component {
  render() {
    return (
      <ul id="profiles">
        {this.props.profiles.map((card, i) => {
          return <Card card={card} key={i} toggleClass={this.props.toggleClass} styleCondition={card.styleCondition} />;
        })}
      </ul>
    );
  }
}
export default ProfileCards;
