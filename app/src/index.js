import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Main from './components/main';

function renderComponent() {
  ReactDOM.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('root')
  );
}

renderComponent();

if (module.hot) {
  module.hot.accept('./components/main', () => {
    // eslint-disable-next-line no-console
    console.log('Accepting the updated Main module!');
    renderComponent();
  });
}
