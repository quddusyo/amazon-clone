import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
            <Route path='/' element={<><Header /><Home /></>}>
            </Route>
            <Route path='checkout' element={<><Header /><Checkout /></>}>
            </Route>
            <Route path='login' element={<Login />}>
            </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
