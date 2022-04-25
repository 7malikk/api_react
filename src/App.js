import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import List from './List';
import ProfileModal from './ProfileModal';

function App() {
  const [dataArr, setdataArr] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setdataArr(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<List myData={dataArr} />} />
        <Route path="/profile/:id" element={<ProfileModal user={dataArr} />} />
      </Routes>
    </Router>
  );
}

export default App;
