import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployee from "./components/ListEmployee";
import Header from './components/Header';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListEmployee />} exact></Route>
            <Route path="/employees" element={<ListEmployee />}></Route>
            <Route path="/add-employee" element={<AddEmployee />}></Route>
            <Route path="/edit-employee/:id" element={<AddEmployee />}></Route>
          </Routes>
        </div>       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
