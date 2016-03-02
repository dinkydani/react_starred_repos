import React from 'react';
import '../../sass/repo-btns.scss';

export default class RepoBtns extends React.Component {
  render() {
    return (
      <div>
        <p>Current page: {this.props.page}</p>
        {(() => {
          if (this.props.page > 1) {
            return <button className="repo__btn" onClick={this.props.onPrev}>Previous</button>;
          }
          return false;
        })()}
        <button className="repo__btn" onClick={this.props.onNext}>Next</button>
      </div>
    );
  }
}
