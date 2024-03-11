import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../css/LinkNav.css';

function LinkNavbar() {
  const location = useLocation();

  const isSurahActive = location.pathname === '/';
  const isDoaActive = location.pathname.startsWith('/DoaPages');

  return (
    <div className="LinkNav">
      <Link to="/" className={isSurahActive ? 'active' : ''}>Surah</Link>
      <Link to="/DoaPages" className={isDoaActive ? 'active' : ''}>Doa</Link>
    </div>
  );
}

export default LinkNavbar