import React from 'react'
import RepoList from './repo-list'
import RepoBtns from './repo-btns'

import '../../sass/repo-app.scss'

const apiUrl = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=5';

export default class RepoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      repos: [],
      page: 1,
    }
  }
  getCurrentPageRepos(page=1) {
    let url = apiUrl + '&page=' + page
    fetch(url)
      .then(d => {
        d.json().then(d => {
          this.setState({repos: d.items});
        })
      })
      .catch(err => {
        console.error(this.props.url, err)
      });
  }
  componentDidMount() {
    this.getCurrentPageRepos(this.state.page)
  }
  onNext() {
    this.setState({page: this.state.page + 1}, () =>
      this.getCurrentPageRepos(this.state.page)
    )
  }
  onPrev() {
    this.setState({page: this.state.page - 1}, () =>
      this.getCurrentPageRepos(this.state.page)
    )
  }
  render() {
    return (
      <div className='repo__app'>
        <h1>Most Starred JavaScript Repos</h1>
        <RepoList repos={this.state.repos} />
        <RepoBtns page={this.state.page} onNext={this.onNext.bind(this)} onPrev={this.onPrev.bind(this)} />
      </div>
    );
  }
}
