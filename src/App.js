import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div style={{padiding: 32}}>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/News">New</Link>
        </li>
        <li>
        <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/News" element={<NewsPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />
      </Routes>
    </div>
  );
}

export default App;
