import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  FAQ,
  CreateDeck,
  MyDeck
} from './Views'
import { Header, Footer } from './Components'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/create-deck/:id/:id" element={<CreateDeck />} />
          <Route path="/decks" element={<MyDeck />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
