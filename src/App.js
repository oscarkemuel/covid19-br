import React from 'react';

import Main from './components/Main/index';
import Header from './components/Header/index';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
