import React from 'react';
import RepoItem from './repo-item';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../../sass/repo-list.scss';

export default class RepoList extends React.Component {
  render() {
    const repoItems = this.props.repos.map(repo =>
      <RepoItem key={repo.id} repo={repo} />
    );
    return (
      <div className="repo__list">
        <ReactCSSTransitionGroup
          transitionName="repo__list"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {repoItems}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
