import React from 'react';

export default class TeamsListItem extends React.Component {
  render() {
    return (
      <li>
        <img src={ this.props.image } style={{ width: '50px', margin: '5px 20px', verticalAlign: 'middle' }}/>
        <a href={ this.props.hltvProfile }>{ this.props.name }</a>
      </li>
    );
  }
}
