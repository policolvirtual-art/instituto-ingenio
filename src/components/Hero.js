export default function Hero() {
  return (
    <section style={{background: 'linear-gradient(135deg, #0d1b4b 0%, #1a3a8f 60%, #0d1b4b 100%)', padding: '60px 5%'}}>
      <style>{`
        .hero-inner { display: flex; align-items: center; gap: 60px; }
        .hero-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 36px 32px; min-width: 300px; }
        .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
        .hero-stats { display: flex; gap: 32px; margin-top: 28px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1); }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column; gap: 32px; }
          .hero-card { min-width: unset; width: 100%; box-sizing: border-box; }
          .hero-title { font-size: 28px !important; }
          .hero-btns a { width: 100%; text-align: center; box-sizing: border-box; }
        }
      `}</style>
      <div className="hero-inner">
        <div style={{flex: 1}}>
          <div style={{display: 'inline-block', background: 'rgba(240,165,0,0.15)', color: '#f0a500', border: '1px solid rgba(240,165,0,0.4)', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, marginBottom: '20px'}}>
            🎓 Educación virtual 100% colombiana
          </div>
          <h1 className="hero-title" style={{color: '#fff', fontSize: '42px', fontWeight: 800, lineHeight: 1.2, marginBottom: '18px'}}>
            Termina tu bachillerato<br/>desde <span style={{color: '#f0a500'}}>donde estés</span>
          </h1>
          <p style={{color: '#a8b8e0', fontSize: '17px', lineHeight: 1.7, maxWidth: '520px', marginBottom: '36px'}}>
            Prepárate para el Examen de Validación del Bachillerato del ICFES con acompañamiento personalizado, material didáctico virtual y simulacros reales.
          </p>
          <div className="hero-btns">
            <a href="https://wa.me/573103759092?text=Hola%2C%20me%20interesa%20inscribirme%20en%20Instituto%20Ingenio." target="_blank" rel="noopener noreferrer" style={{background: '#f0a500', color: '#0d1b4b', padding: '14px 30px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', textDecoration: 'none'}}>Comenzar ahora</a>
            <a href="#programas" style={{background: 'transparent', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '15px', border: '2px solid rgba(255,255,255,0.3)', textDecoration: 'none'}}>Ver programas</a>
          </div>
        </div>
        <div className="hero-card">
          <div style={{color: '#f0a500', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px'}}>¿Qué incluye?</div>
          {['Acompañamiento pedagógico virtual', 'Simulacros de examen ICFES', 'Material didáctico interactivo', 'Asesoría orientada por expertos', 'Cursos adicionales en tecnología'].map((item, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
              <div style={{width: '10px', height: '10px', background: '#f0a500', borderRadius: '50%', flexShrink: 0}}></div>
              <span style={{color: '#ccd6f6', fontSize: '14px'}}>{item}</span>
            </div>
          ))}
          <div className="hero-stats">
            {[['100%', 'Virtual'], ['ICFES', 'Avalado'], ['2026', 'Inscripciones']].map(([num, label], i) => (
              <div key={i}>
                <div style={{color: '#fff', fontSize: '26px', fontWeight: 800}}>{num}</div>
                <div style={{color: '#7a8fb5', fontSize: '12px'}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}