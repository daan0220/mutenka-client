import './App.css';
import Header from './components/parts/Header';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './pages/contact/ContactForm';
// import CategoryFilter from './pages/home/Search/CategoryFilter';
// import AreaFilter from './pages/home/Search/AreaFilter';
// import LocationFilter from './pages/home/Search/LocationFilter';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactForm/>} />
        {/* <Route path="/location" element={<LocationFilter/>} />
        <Route path="/area" element={<AreaFilter/>} />
        <Route path="/category" element={<CategoryFilter/>} /> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
