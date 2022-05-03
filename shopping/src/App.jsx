import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Header } from './components/header';
import Gallery from './components/gallery';
import Home from './components/home';
import NotFound from './components/not-found';
// import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
