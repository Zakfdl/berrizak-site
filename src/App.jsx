import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import Admin from './pages/Admin';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router basename="/portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cms" element={<Admin />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;