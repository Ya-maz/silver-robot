import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className={'App min-h-screen'}>
      <div className="flex justify-end">
        <button className="font-bold py-2 px-4 rounded">Light</button>
        <button className="font-bold py-2 px-4 rounded">Dark</button>
      </div>
      <div className="flex flex-col min-h-fit">
        <div className="flex justify-center items-center">
        <i class="bi bi-sunrise" style={{fontSize: "4rem"}}></i>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder="text" />
            <button className="font-bold py-2 px-4 rounded">Submit</button>
          </form>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
