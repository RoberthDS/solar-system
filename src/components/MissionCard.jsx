import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { year, name, country, destination } = this.props;

    return (
      <div className='card-unit'>
        <div data-testid="mission-card" />
        <p className="missionCard" data-testid="mission-name">{name}</p>
        <p className="missionCard" data-testid="mission-year">{year}</p>
        <p className="missionCard" data-testid="mission-country">{country}</p>
        <p className="missionCard" data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  year: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
