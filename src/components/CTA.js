export default function CTA() {
  const waLink = "https://wa.me/573103759092?text=Hola%2C%20me%20interesa%20inscribirme%20en%20Instituto%20Ingenio.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F";

  return (
    <section style={{background: 'linear-gradient(135deg, #f0a500, #ffcc55)', padding: '70px 5%', textAlign: 'center'}}>
      <style>{`
        .cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 480px) {
          .cta-btns a { width: 100%; box-sizing: border-box; }
          .cta-title { font-size: 26px !important; }
        }
      `}</style>
      <h2 className="cta-title" style={{fontSize: '34px', fontWeight: 800, color: '#0d1b4b', marginBottom: '14px'}}>¿Listo para cambiar tu futuro?</h2>
      <p style={{fontSize: '17px', color: '#3a2a00', marginBottom: '34px'}}>Únete a Instituto Ingenio y da el primer paso hacia tu título de bachiller.</p>
      <div className="cta-btns">
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          style={{background: '#0d1b4b', color: '#fff', padding: '16px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 700, textDecoration: 'none'}}>
          Inscribirme ahora
        </a>
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          style={{background: 'transparent', color: '#0d1b4b', padding: '16px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 700, textDecoration: 'none', border: '2px solid #0d1b4b'}}>
          Hablar con un asesor
        </a>
      </div>
    </section>
  );
}