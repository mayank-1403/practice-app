import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode= () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been set", "Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been set", "Success");
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" aboutText="About Me" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/about" element={<About/>}/> */}
            {/* <About/> */}
          {/* <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} /> */}
            <TextForm heading="Enter text to analyze" mode={mode} />
          {/* </Route> */}
    {/* </Routes> */}
    
    {/* <About/> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
