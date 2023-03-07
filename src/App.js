import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Loader from './components/loader/loader';

function App() {
    return (
        <div className="transition-all">
            {/* <Loader /> */}
            <Home />
        </div>
    );
}

{
    console.log('%c Developer Tools! ', 'color: red');
}
export default App;
