import React from 'react'
import ReactDOM from 'react-dom'
import RepoItem from './repo-item'

export default class RepoList extends React.Component {
  componentDidUpdate() {
    let list = ReactDOM.findDOMNode(this);
    document.body.scrollTop = list.scrollTop;
  }
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
