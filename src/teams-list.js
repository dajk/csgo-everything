import React from 'react';
import TeamsListItem from './teams-list-item';

export default class TeamsList extends React.Component {
  renderTeams() {
    const teams = this.props.teams.map((team, index) =>
      <TeamsListItem key={index}
      {...team} />
    );

    return teams;
  }

  render() {
    return (
        <ul style={{ listStyle: 'none' }}>
          <h2> List of teams: </h2>
          { this.renderTeams() }
        </ul>
    );
  }
}
