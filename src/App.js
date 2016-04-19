import React from 'react';
import teams from './csgo-teams';

export class App extends React.Component {

  render() {
    var list = teams.map(function(item, index) {
      return (
        <li key={index}>
          <img src={ item.image } style={{ width: '50px', margin: '5px 20px', verticalAlign: 'middle' }}/>
          <a href={ item.hltvProfile }>{ item.name }</a>
        </li>
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
