// import React, { Component, PropTypes } from 'react';
// import RepoItem from './repo-item';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import '../../sass/repo-list.scss';

// // export const RepoList = ({
// //   repos
// // }) => (
// //   <div className="repo__list">
// //     <ReactCSSTransitionGroup
// //       transitionName="repo__list"
// //       transitionEnterTimeout={300}
// //       transitionLeaveTimeout={300}
// //     >
// //       {repos.map(repo =>
// //         <RepoItem
// //           key={repo.id}
// //           {...repo}
// //         />
// //       )}
// //     </ReactCSSTransitionGroup>
// //   </div>
// // );

// export default class RepoList extends Component {
//   render() {
//     const repoItems = this.props.repos.map(repo =>
//       <RepoItem
//         key={repo.id}
//         repo={repo}
//       />
//     );
//     return (
//       <div className="repo__list">
//         <ReactCSSTransitionGroup
//           transitionName="repo__list"
//           transitionEnterTimeout={300}
//           transitionLeaveTimeout={300}
//         >
//           {repoItems}
//         </ReactCSSTransitionGroup>
//       </div>
//     );
//   }
// }

// RepoList.propTypes = {
//   repos: PropTypes.array.isRequired
// };

