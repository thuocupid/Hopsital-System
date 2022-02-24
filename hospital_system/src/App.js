import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminLogin from './components/Log In pages/AdminLogin';
import DoctorLogin from './components/Log In pages/DoctorLogin';
import StaffLogin from './components/Log In pages/StaffLogin';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
