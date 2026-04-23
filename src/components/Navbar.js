'use client';
import { useState } from 'react';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const waLink = "https://wa.me/573103759092?text=Hola%2C%20me%20interesa%20inscribirme%20en%20Instituto%20Ingenio.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";

  return (
    <nav style={{background: '#0d1b4b', padding: '0 5%', position: 'sticky', top: 0, zIndex: 100}}>
      <style>{`
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 68px; }
        .nav-links { display: flex; gap: 28px; }
        .nav-links a { color: #ccd6f6; fontSize: 14px; text-decoration: none; }
        .nav-btn { display: block; }
        .nav-hamburger { display: none; background: none; border: none; color: #fff; font-size: 24px; cursor: pointer; }
        .nav-mobile { display: none; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-btn { display: none; }
          .nav-hamburger { display: block; }
          .nav-mobile { display: ${menuAbierto ? 'flex' : 'none'}; flex-direction: column; gap: 0; padding-bottom: 12px; }
          .nav-mobile a { color: #ccd6f6; text-decoration: none; font-size: 15px; padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .nav-mobile .nav-mobile-btn { background: #f0a500; color: #0d1b4b; padding: 12px 0; border-radius: 6px; font-weight: 700; text-align: center; margin-top: 8px; border: none; }
        }
      `}</style>

      <div className="nav-inner">
        <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
          <div style={{width: '42px', height: '42px', background: '#f0a500', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px', color: '#0d1b4b'}}>II</div>
          <span style={{color: '#fff', fontSize: '20px', fontWeight: 700}}>Instituto <span style={{color: '#f0a500'}}>Ingenio</span></span>
        </div>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#programas">Programas</a>
          <a href="#como-funciona">¿Cómo funciona?</a>
          <a href="#beneficios">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        <a href={waLink} target="_blank" rel="noopener noreferrer" className="nav-btn"
          style={{background: '#f0a500', color: '#0d1b4b', padding: '10px 22px', borderRadius: '6px', fontWeight: 700, fontSize: '14px', textDecoration: 'none'}}>
          ¡Inscríbete ya!
        </a>

        <button className="nav-hamburger" onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>

      <div className="nav-mobile">
        <a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a>
        <a href="#programas" onClick={() => setMenuAbierto(false)}>Programas</a>
        <a href="#como-funciona" onClick={() => setMenuAbierto(false)}>¿Cómo funciona?</a>
        <a href="#beneficios" onClick={() => setMenuAbierto(false)}>Nosotros</a>
        <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="nav-mobile-btn">¡Inscríbete ya!</a>
      </div>
    </nav>
  );
}