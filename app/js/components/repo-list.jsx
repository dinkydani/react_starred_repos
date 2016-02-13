import React from 'react'
import ReactDOM from 'react-dom'
import RepoItem from './repo-item'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../../sass/repo-list.scss'

export default class RepoList extends React.Component {
  render() {
    let repoItems = this.props.repos.map(repo => {
      return (
        <RepoItem key={repo.id} repo={repo} />
      );
    })
    return (
      <div className='repo__list'>
        <ReactCSSTransitionGroup transitionName="repo__list" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {repoItems}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
