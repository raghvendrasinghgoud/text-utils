import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import Aboutus from './components/Aboutus';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  let changeMode=()=>{
    if(mode==='dark'){ 
      setMode("light");
      Dark();
      showAlert("Success","Light Mode Enabled");
  }
    else{ 
      setMode("dark");
      Dark();
      showAlert("Success","dark Mode Enabled");
  }
  };

  const [color,setColor]=useState({
    backgroundColor:'white',
    color:'black'
  });
  let Dark=()=>{
    if(mode==="light"){
      setColor({
        backgroundColor:'black',
      color:'white'
      })
      document.body.style.backgroundColor='#21201c';
    }else{
      setColor({
        backgroundColor:'white',
      color:'black'
      })
      document.body.style.backgroundColor='white';      
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(stat,msg)=>{
    setAlert({
      stat:stat,
      msg:msg
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <Router>
    <Navbar title="yourText" about="about us" mode={mode} cMode={changeMode}/>
    <Alert mode={mode} alert={alert}  />

      <Routes>
      <Route exact path="/index.html" element={<TextForm title="TextUtils" mode={mode} color={color} showAlert={showAlert} />} />
      <Route exact path="/text-utils" element={<TextForm title="TextUtils" mode={mode} color={color} showAlert={showAlert} />} />
      <Route exact path="/about" element={<Aboutus mode={mode} />} />
        {/* <Route exact path="/">
          <TextForm title="TextUtils" mode={mode} color={color} showAlert={showAlert} />
        </Route>
        <Route path="/about">
          <Aboutus mode={mode} />
        </Route> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
