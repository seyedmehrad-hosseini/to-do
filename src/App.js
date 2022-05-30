import React from 'react';
import './css/main.min.css'
import Header from './header';
import Main from './main';

const App = () => {

    return (
        <div className='container'>
            <Header/>
            <Main/>
        </div>
    );
};

export default App;
