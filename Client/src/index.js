import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Routes from './routes/Routes';
import './index.scss';



render((
    <React.StrictMode>
        <Routes/>
        <App/>
        
    </React.StrictMode>
), document.getElementById('root'));