import {useState} from 'react'
import useLocalStorage from 'use-local-storage';
import Navbar from './Navbar';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';
import { FlagIcon } from 'react-flag-kit';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Switch = ({switchTheme, isOn, theme}) => {
    const [language, setLanguage] = useState('English');
    const [helloText, setHelloText] = useState('Hello');

    const switchLanguage = (newLanguage) => {
        let newHelloText = ''; 

        switch (newLanguage) {
            case 'English':
                newHelloText = 'Hello';
                break;
            case 'Spanish':
                newHelloText = 'Hola';
                break;
            case 'French':
                newHelloText = 'Bonjour';
                break;
            case 'German':
                newHelloText = 'Hallo';
                break;
            default:
                newHelloText = 'Hello';
                break;
        }

        setLanguage(newLanguage);
        setHelloText(newHelloText);
    };

    return (
        <div className='mt-auto'>
            
            <Outlet />
            
            <br />
            <br />
            <div className='language-switcher'>
            <button onClick={() => switchLanguage('English')}>
                <FlagIcon code='US' /> 
            </button>
            <button onClick={() => switchLanguage('Spanish')}>
                <FlagIcon code='ES' /> 
            </button>
            <button onClick={() => switchLanguage('French')}>
                <FlagIcon code='FR' /> 
            </button>
            <button onClick={() => switchLanguage('German')}>
                <FlagIcon code='DE' /> 
            </button>
            <p>{helloText}</p>
            </div>
            
        </div>
    );
};