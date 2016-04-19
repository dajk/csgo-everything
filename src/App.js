import React from 'react';
import teams from './csgo-teams';

export class App extends React.Component {

  render() {
    var arr = [];

    var list = teams.map(function(item, index) {
      return (
        <li key={index}>{ item }</li>
      );
    })
    return (
      <ul style={{ listStyle: 'none' }}>
        <h2> List of teams: </h2>
        { list }
      </ul>
    )
  }
}
