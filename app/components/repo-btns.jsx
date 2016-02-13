import React from 'react'

export default class RepoBtns extends React.Component {
  render() {
    return (
      <div>
        {(() => {
          if(this.props.page > 1) {
            return <button onClick={this.props.onPrev}>Previous</button>
          }
        })()}
        <p>Current page: {this.props.page}</p>
        <button onClick={this.props.onNext}>Next</button>
      </div>
    )
  }
}