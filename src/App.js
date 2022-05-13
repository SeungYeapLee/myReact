import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

let rendered = 0, count1 = 0;
function App() {
  const goTo = 'https://www.google.co.kr/';

  const [title, setTitle] = useState('My Test App');
  useEffect(() => {

    if(rendered>0) {
      count1++;
      console.log('goTo:',goTo,count1);
      //window.location.href = goTo;
    }

    rendered++;
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{title}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
