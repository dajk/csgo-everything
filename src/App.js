import React from 'react';
import teams from './csgo-teams';
import Header from './header';
import TeamsList from './teams-list';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      teams
    };
  }

  render() {
    return (
      <div>
        <Header />
        <TeamsList teams={this.state.teams} />
      </div>
    )
  }

}
