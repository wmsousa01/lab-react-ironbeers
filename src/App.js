import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BeersPage from './pages/BeersPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/'element={<HomePage />} />
        <Route path="BeersPage" element={<BeersPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
