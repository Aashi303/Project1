import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Randomjoke from './Randomjoke';
import FormValidation1 from './FormValidation1';
import FormValidation2 from './FormValidation2';
import Home from './Home';


function App() {
  return (
    <div className="App">
      {/* <Randomjoke/> */}
      {/* <FormValidation1/> */}
    
    <Router>
    <Routes> 
      
      <Route exact path="/" element={<FormValidation2/>}/>
      <Route exact path="/Home" element={<Home/>}/>
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
