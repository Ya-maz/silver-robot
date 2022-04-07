import React from 'react';
import './App.css';
import { IconSunrise, IconSunset } from './IconSun';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const switchToLight = () => setTheme('light');
  const switchToDark = () => setTheme('dark');
  return (
    <div className={'app min-h-screen'}>
      <div className="flex justify-end">
        <button
          onClick={switchToLight}
          className="button m-1 font-bold py-2 px-4 rounded"
        >
          Light
        </button>
        <button
          onClick={switchToDark}
          className="button m-1 font-bold py-2 px-4 rounded"
        >
          Dark
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <IconSunrise />
          <IconSunset />
        </div>
        <div>
          <form action="">
            <input
              type="text"
              placeholder="text"
              className="input rounded p-2 min-h-fit"
            />
            <button className="m-2 bg-sky-600 font-bold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
