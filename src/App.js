import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Home, About, Contact } from './Views'
import { Header, Footer } from './Components'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
