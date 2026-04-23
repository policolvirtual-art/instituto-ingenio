export default function Navbar() {
  return (
    <nav style={{background: '#0d1b4b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%', height: '68px', position: 'sticky', top: 0, zIndex: 100}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
        <div style={{width: '42px', height: '42px', background: '#f0a500', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px', color: '#0d1b4b'}}>II</div>
        <span style={{color: '#fff', fontSize: '20px', fontWeight: 700}}>Instituto <span style={{color: '#f0a500'}}>Ingenio</span></span>
      </div>
      <div style={{display: 'flex', gap: '28px'}}>
        <a href="#inicio" style={{color: '#ccd6f6', fontSize: '14px', textDecoration: 'none'}}>Inicio</a>
        <a href="#programas" style={{color: '#ccd6f6', fontSize: '14px', textDecoration: 'none'}}>Programas</a>
        <a href="#como-funciona" style={{color: '#ccd6f6', fontSize: '14px', textDecoration: 'none'}}>¿Cómo funciona?</a>
        <a href="#beneficios" style={{color: '#ccd6f6', fontSize: '14px', textDecoration: 'none'}}>Nosotros</a>
        <a href="#contacto" style={{color: '#ccd6f6', fontSize: '14px', textDecoration: 'none'}}>Contacto</a>        
      </div>
      <a 
        href="https://wa.me/573103759092?text=Hola%2C%20me%20interesa%20inscribirme%20en%20Instituto%20Ingenio.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
        target="_blank"
        rel="noopener noreferrer"
        style={{background: '#f0a500', color: '#0d1b4b', border: 'none', padding: '10px 22px', borderRadius: '6px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', textDecoration: 'none'}}
      >
        ¡Inscríbete ya!
      </a>
    </nav>
  );
}