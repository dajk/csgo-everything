import React from 'react';

export default class TeamsListItem extends React.Component {
  renderPlayers() {
    const players = this.props.players.map((player, index) =>
      <li key={index} style={{ display: 'inline' }} className='players-list'
      {...player}>
        <a style={{ display: 'inline' }} target="_blank" href={'http://www.hltv.org' + player.link}>{player.nick}</a>
      </li>
    );

    return players;
  }

  render() {
    return (
      <li style={{ paddingTop: '25px', marginTop: '25px', borderTop: '1px solid #ddd' }}>
        <img src={ this.props.image } style={{ width: '50px', margin: '5px 20px', verticalAlign: 'middle' }} />
        <h1><a href={ this.props.hltvProfile } target='_blank'>{ this.props.name }</a></h1>
        <ul>
          { this.renderPlayers() }
        </ul>
      </li>
    );
  }
}
