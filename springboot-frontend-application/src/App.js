import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  /**
   * Upgrade from React Router v6 to useNavigate > useHistory
   * @link https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
   */
  const navigate = useNavigate();
  function navigateOnClick(path) {
    navigate(path);
  }

  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path='/' exact element={<ListEmployeeComponent onClick={navigateOnClick} />}></Route>
          <Route path='/employees' element={<ListEmployeeComponent onClick={navigateOnClick} />}></Route>
          <Route path='/add-employee' element={<CreateEmployeeComponent />}></Route>
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
