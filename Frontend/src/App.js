import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route,Routes,Navigate } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Homepage/>} />
                <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
