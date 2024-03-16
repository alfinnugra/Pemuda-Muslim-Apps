import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../css/LinkNav.css';

function LinkNavbar() {
  const location = useLocation();

  const isSurahActive = location.pathname === '/';
  const isDoaActive = location.pathname.startsWith('/DoaPages');
  const isAsmaActive = location.pathname.startsWith('/AsmaPages');

  return (
    <div className="LinkNav">
      <Link to="/" className={isSurahActive ? 'active' : ''}>Surah</Link>
      <Link to="/DoaPages" className={isDoaActive ? 'active' : ''}>Doa</Link>
      <Link to="/AsmaPages" className={isAsmaActive ? 'active' : ''}>Asma</Link>
    </div>
  );
}

export default LinkNavbar