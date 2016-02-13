import React from 'react'
import ReactDOM from 'react-dom'

// If you export a template it assumes it's a React component
// export default () => <div>Hello From React!</div>;

export default class HelloReact extends React.Component {
  displayName: 'HelloReact'
  render() {
    return <div>Hello From React!</div>
  }
}
