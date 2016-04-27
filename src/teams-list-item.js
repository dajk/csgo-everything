import React from 'react';

export default class TeamsListItem extends React.Component {
  renderPlayers() {
    const players = this.props.players.map((player, index) =>
      <li key={player} style={{ display: 'inline', marginRight: '10px' }}
      {...player}>{player}</li>
    );

    return players;
  }

  render() {
    return (
      <li>
        <div>
          <img src={ this.props.image } style={{ width: '50px', margin: '5px 20px', verticalAlign: 'middle' }} />
          <a href={ this.props.hltvProfile }>{ this.props.name }</a>
        </div>
        <ul>
          { this.renderPlayers() }
        </ul>
      </li>
    );
  }
}
