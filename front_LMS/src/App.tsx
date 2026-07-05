
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Impact } from './pages/Impact';
import { Grades } from './pages/Grades';
import { Resources } from './pages/Resources';
import { WhatWeOffer } from './pages/WhatWeOffer';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}