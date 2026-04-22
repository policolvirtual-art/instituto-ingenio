export default function Hero() {
  return (
    <section style={{background: 'linear-gradient(135deg, #0d1b4b 0%, #1a3a8f 60%, #0d1b4b 100%)', padding: '80px 5% 70px', display: 'flex', alignItems: 'center', gap: '60px', minHeight: '520px'}}>
      <div style={{flex: 1}}>
        <div style={{display: 'inline-block', background: 'rgba(240,165,0,0.15)', color: '#f0a500', border: '1px solid rgba(240,165,0,0.4)', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, marginBottom: '20px'}}>
          🎓 Educación virtual 100% colombiana
        </div>
        <h1 style={{color: '#fff', fontSize: '42px', fontWeight: 800, lineHeight: 1.2, marginBottom: '18px'}}>
          Termina tu bachillerato<br/>desde <span style={{color: '#f0a500'}}>donde estés</span>
        </h1>
        <p style={{color: '#a8b8e0', fontSize: '17px', lineHeight: 1.7, maxWidth: '520px', marginBottom: '36px'}}>
          Prepárate para el Examen de Validación del Bachillerato del ICFES con acompañamiento personalizado, material didáctico virtual y simulacros reales.
        </p>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <a href="#" style={{background: '#f0a500', color: '#0d1b4b', padding: '14px 30px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', textDecoration: 'none'}}>Comenzar ahora</a>
          <a href="#" style={{background: 'transparent', color: '#fff', padding: '14px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '15px', border: '2px solid rgba(255,255,255,0.3)', textDecoration: 'none'}}>Ver programas</a>
        </div>
      </div>
      <div style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '16px', padding: '36px 32px', minWidth: '300px'}}>
        <div style={{color: '#f0a500', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px'}}>¿Qué incluye?</div>
        {['Acompañamiento pedagógico virtual', 'Simulacros de examen ICFES', 'Material didáctico interactivo', 'Asesoría orientada por expertos', 'Cursos adicionales en tecnología'].map((item, i) => (
          <div key={i} style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px'}}>
            <div style={{width: '10px', height: '10px', background: '#f0a500', borderRadius: '50%', flexShrink: 0}}></div>
            <span style={{color: '#ccd6f6', fontSize: '14px'}}>{item}</span>
          </div>
        ))}
        <div style={{display: 'flex', gap: '32px', marginTop: '28px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
          {[['100%', 'Virtual'], ['ICFES', 'Avalado'], ['2026', 'Inscripciones']].map(([num, label], i) => (
            <div key={i}>
              <div style={{color: '#fff', fontSize: '26px', fontWeight: 800}}>{num}</div>
              <div style={{color: '#7a8fb5', fontSize: '12px'}}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}