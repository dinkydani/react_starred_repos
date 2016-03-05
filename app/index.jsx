import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RepoApp from './js/components/repo-app.jsx';

const pagination = (
  state = {
    page: 1,
    pageSize: 5
  },
  action
) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return {
        page: state.page + 1,
        pageSize: 5
      };
    case 'PREV_PAGE':
      return {
        page: state.page <= 1 ? 1 : state.page - 1,
        pageSize: 5
      };
    default:
      return state;
  }
};

const store = createStore(pagination);

const render = () => {
  ReactDOM.render(
    <RepoApp
      store={ store }
    />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();
