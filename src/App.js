import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent />
      <div className='container'>
        <Routes>
          <Route path="/" element ={<ListEmployeeComponent/>} exact></Route>
          <Route path="/employees" element ={<ListEmployeeComponent/>} ></Route>
          <Route path = "/add-employee" element = {<AddEmployeeComponent/>} ></Route>
        </Routes>
      </div>
      <FooterComponent /> 
      </Router>
    </div>
  );
}

export default App;
