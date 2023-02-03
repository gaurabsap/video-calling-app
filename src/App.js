import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Call from './Call';
import Home from './Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomId' element={<Call/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
