// import logo from './logo.svg';
// import photo from "./photo.png"
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
  <>
  <Router>
  <Navbar title="MyApp" aboutText="About" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container">
  <Routes>
    <Route exact path="/about" element={<About/> } />
    <Route exact path="/" element={<TextForms heading="Assignment" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
  </Routes>
  </div>
  </Router>
  </>
    
  );
}

export default App;
