import React from 'react'
import '../../sass/repo-item.scss'
import 'font-awesome-webpack'

export default class RepoItem extends React.Component {
  render() {
    return (
      <div className='repo__item'>
        <h2 className='repo__name'>{this.props.repo.full_name}</h2>
        <p className='repo__owner'>{this.props.repo.owner.login}</p>
        <p className='repo__stars'>
          <span className='fa fa-star'></span>
          {this.props.repo.stargazers_count}
        </p>
        <a href={this.props.repo.html_url}>Take me there</a>
      </div>
    );
  }
}
