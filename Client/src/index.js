import React from 'react';
import {render} from 'react-dom';
import Routes from './routes/Routes';
import './index.scss';



render((
    <React.StrictMode>
        <Routes/>
        
    </React.StrictMode>
), document.getElementById('root'));