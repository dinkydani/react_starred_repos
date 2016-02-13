import React from 'react'

export default class RepoItem extends React.Component {
  render() {
    return (
      <div className="repo__item">
        <h2 className="repo__name">
          {this.props.repo.name}
        </h2>
        <p>{this.props.repo.owner.login}</p>
        <p>{this.props.repo.stargazers_count} stars</p>
        <a href={this.props.repo.html_url}>Take me there</a>
      </div>
    );
  }
}
