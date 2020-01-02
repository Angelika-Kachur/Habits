import React from 'react';
import logo from './assets/images/Logo.svg';
import './assets/styles/_utils.scss';
import './assets/styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <main>
        <h1>Welcome to your Habit Tracker</h1>
        <form action="#">
          <label>
            <span>Name:</span>
            <input type="text" placeholder="Name" />
          </label>
        </form>
      </main>
    </div>
  );
}

export default App;
