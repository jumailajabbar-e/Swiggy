import React from 'react';
import './App.css';
import 'bootstrap/scss/bootstrap.scss';
import FrontPage from './Components/FrontPage/FrontPage';
import Middle from './Components/FrontPage/Middle/Middle';
import Last from './Last/Last';

function App() {
  return (
    <div>
     <FrontPage/>
     <Middle/>
     <Last/>

    </div>
  );
}

export default App;
