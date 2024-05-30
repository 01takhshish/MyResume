import "./App.css";
import Navbar from './components/Navbar';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DisplayFormData from "./components/DisplayFormData";
import HomeDisp from './components/home/Home';
import About from './components/about/About';


function App() {

  return (
    <div className="App">
     
    
   <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomeDisp />}/>
        <Route exact path="/MyResume" element={<HomeDisp />}/>
        <Route exact path="/about" element={<About />}/>
      <Route exact path="/pr" element={<Main />}/>
      <Route exact path="/dis" element={<DisplayFormData />}/>
      
    
    
      </Routes>
    </div>
    </BrowserRouter> 
   
    </div>
  );
}

export default App;