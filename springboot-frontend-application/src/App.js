import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes> http://localhost:3000/
            <Route path='/' element={<ListEmployeeComponent />}></Route>
            <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
