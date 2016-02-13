import React from 'react'
import RepoItem from './repo-item'

export default class RepoList extends React.Component {
  render() {
    let repoItems = this.props.repos.map(repo => {
      return (
        <RepoItem key={repo.id} repo={repo} />
      );
    })
    return (
      <div className='repo__list'>
        {repoItems}
      </div>
    );
  }
}
