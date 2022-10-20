import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Start from './Components/Start/Start';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start/>} />
            <Route path='/home' element={<Home/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
