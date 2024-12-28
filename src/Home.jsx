import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from "./components/about";
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function Home() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "success");
      document.title = "Dark mode enabled";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "Light mode enabled";
    }
  }

  

  return (
    <>

      <Navbar mode={mode} title="manasbro" aboutText="About" togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        

        

        
            {/* <TextForm heading="Enter your text here" mode={mode} /> */}
          
        
      </div>

      {/* <div className="container my-3">
        <About heading="About this" />
      </div> */}

    </>
  );
}

export default Home;