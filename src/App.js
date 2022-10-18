import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Start from './Components/Start/Start';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path='/home' element={<Home/>} />

      </Routes>
    </div>
  );
}

export default App;
