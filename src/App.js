import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Tp1 from './components/Tp1';
import Tp2 from './components/Tp2';
import Tp3 from './components/Tp3';
import Tp4 from './components/Tp4';
import 'bootstrap/dist/css/bootstrap.css';
import useLocalStorage from 'use-local-storage';
import { Switch } from './components/Switch';


function App() {

  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isLight, setIsLight] = useState(true);
  const [isOn, setIsOn] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsOn(!isOn);
    setIsLight(!isLight);
};

  return (
    <div data-theme={theme} className='theme-toggle'>
        <Navbar switchTheme = {switchTheme} isOn={isOn} theme={theme} isLight={isLight} />
        <Routes>
            <Route path='/' element={<Tp1 />} />
            <Route path='/tp2' element={<Tp2 />} />
            <Route path='/tp3' element={<Tp3 />} />
            <Route path='/tp4' element={<Tp4 />} />
        </Routes>
        <Switch />
    </div>
  );
}

export default App;
