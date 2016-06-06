import React from 'react';
import teams from './csgo-teams';
import Header from './header';
import TeamsList from './teams-list';
import moment from 'moment';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      teams,
      upcomingMatches: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/upcoming-matches', {
      method: 'get'
    }).then(function(data) {
      return data.json();
    }).then(function(res) {
      this.setState({
        upcomingMatches: res.hltv
      });
    }.bind(this));
  }

  renderMatches() {
    const matches = this.state.upcomingMatches.map((match, index) =>
      <li key={index} {...match} style={{ paddingTop: '15px', borderTop: '1px solid #ddd' }}>
        <a target="_blank" href={match.link}>{match.title}</a>
        <span style={{ fontSize: '12px', color: '#222', fontFamily: 'arial' }}>{moment(match.date).format('MMM Do (ddd), h:mm a')}</span>
        <p>{match.description}</p>
      </li>
    );

    return matches;
  }

  render() {
    return (
      <div>
        <Header />
        <TeamsList teams={this.state.teams} />
        
        <ul style={{ marginRight: '10px', boxShadow: '0 0 4px 0 rgba(0,0,0,0.5)', float: 'left', padding: '1em' }}>
          <h2> List of matches: </h2>
          { this.renderMatches() }
        </ul>
      </div>
    )
  }

}
