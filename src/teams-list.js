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
        <ul style={{ marginRight: '10px', boxShadow: '0 0 4px 0 rgba(0,0,0,0.5)', float: 'left', padding: '1em' }}>
          <h2> List of teams: </h2>
          { this.renderTeams() }
        </ul>
    );
  }
}
