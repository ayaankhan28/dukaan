import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ChatPage from './pages/ChatPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ChatPage/>} />
                
            </Routes>
        </Router>
    );
};

export default App;
