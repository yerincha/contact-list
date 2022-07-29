import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import mockContactData from './data/mockData';

import Home from './pages/home';
import Edit from './pages/edit';
import Create from './pages/create';

function App() {
  const [list, setList] = useState(mockContactData);
  const [seletedContact, setSelectedContact] = useState({});

  return (
    <div className="contact-list">
      <Router>
        <Routes>
          <Route path="/" element={<Home list={list} setSelectedContact={setSelectedContact} />} />
          <Route
            path="/edit"
            element={<Edit list={list} contact={seletedContact} setList={setList} />}
          />
          <Route
            path="/create"
            element={<Create list={list} setList={setList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
