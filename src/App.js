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
      upcomingMatches: [],
      hotMatches: [],
      latestNews: [],
      latestBlogs: [],
      latestDemos: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/latest-news', {
      method: 'get'
    }).then(function(data) {
      return data.json();
    }).then(function(res) {
      this.setState({
        latestNews: res.news
      });
    }.bind(this));

    fetch('http://localhost:5000/api/latest-blogs', {
      method: 'get'
    }).then(function(data) {
      return data.json();
    }).then(function(res) {
      this.setState({
        latestBlogs: res.blog
      });
    }.bind(this));

    fetch('http://localhost:5000/api/latest-demos', {
      method: 'get'
    }).then(function(data) {
      return data.json();
    }).then(function(res) {
      this.setState({
        latestDemos: res.demo
      });
    }.bind(this));
  }

  renderLatestNews() {
    const latestNews = this.state.latestNews.map((news, index) =>
      <li key={index} {...news} style={{ paddingTop: '15px', borderTop: '1px solid #ddd' }}>
        <a target="_blank" href={news.link}>
          {news.title}
        </a>
        <span style={{ fontSize: '12px', color: '#222', fontFamily: 'arial' }}>
          {moment(news.date).format('MMM Do (ddd), h:mm a')}
        </span>
      </li>
    );

    return latestNews;
  }

  renderLatestBlogs() {
    const latestBlogs = this.state.latestBlogs.map((blog, index) =>
      <li key={index} {...blog} style={{ maxWidth: '200px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
        <a target="_blank" href={blog.link}>
          {blog.title}
        </a>
        <span style={{ fontSize: '12px', color: '#222', fontFamily: 'arial' }}>
          {moment(blog.date).format('MMM Do (ddd), h:mm a')}
        </span>
      </li>
    );

    return latestBlogs;
  }

  renderLatestDemos() {
    const latestDemos = this.state.latestDemos.map((demo, index) =>
      <li key={index} {...demo} style={{ maxWidth: '200px', paddingTop: '15px', borderTop: '1px solid #ddd' }}>
        <a target="_blank" href={demo.link}>
          {demo.title}
        </a>
        <span style={{ fontSize: '12px', color: '#222', fontFamily: 'arial' }}>
          {moment(demo.date).format('MMM Do (ddd), h:mm a')}
        </span>
        <p>{demo.description}</p>
        <p>{demo.map}</p>
      </li>
    );

    return latestDemos;
  }

  render() {
    return (
      <div>
        <Header />
        <TeamsList teams={this.state.teams} />

        <ul style={{ marginRight: '10px', boxShadow: '0 0 4px 0 rgba(0,0,0,0.5)', float: 'left', padding: '1em' }}>
          <h2> List of news: </h2>
          { this.renderLatestNews() }
        </ul>

        <ul style={{ marginRight: '10px', boxShadow: '0 0 4px 0 rgba(0,0,0,0.5)', float: 'left', padding: '1em' }}>
          <h2> List of blogs: </h2>
          { this.renderLatestBlogs() }
        </ul>

        <ul style={{ marginRight: '10px', boxShadow: '0 0 4px 0 rgba(0,0,0,0.5)', float: 'left', padding: '1em' }}>
          <h2> List of demos: </h2>
          { this.renderLatestDemos() }
        </ul>
      </div>
    );
  }

}
