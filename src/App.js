import React from 'react';
import {GlobalStyle} from './style'
import {GlobalStyleFont} from './statics/icon-font/iconfont'
import Header from './common/header/'
function App() {
  return (
    <div>
        <Header></Header>
        <GlobalStyleFont/>
        <GlobalStyle/>
    </div>
  );
}

export default App;
