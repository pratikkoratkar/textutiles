import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if (Mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#2c3137'
      showalert("  Dark mode has been enabled","  Success");
      document.title="Textutiles - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert("  Light mode has been enabled","  Success");
      document.title="Textutiles - light Mode"


    }
  }
  return (
  
    <>
    <Router>
    <Navbar title="Textutiles App" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Switch>
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/">
          <TextForm showAlert={showalert} heading="Enter The Text To Analyze" mode={Mode}/>
          </Route>

    </Switch>
    </Router>
    
    </>


  );
}

export default App;
