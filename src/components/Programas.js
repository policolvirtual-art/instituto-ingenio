export default function Programas() {
  const programas = [
    { emoji: '🎓', color: 'linear-gradient(135deg, #1a3a8f, #2d5bbf)', tag: 'Principal', titulo: 'Preparación Bachillerato ICFES', desc: 'Programa completo de preparación para el examen de validación de bachillerato. Incluye todas las áreas del conocimiento requeridas.' },
    { emoji: '💻', color: 'linear-gradient(135deg, #c47f00, #f0a500)', tag: 'Tecnología', titulo: 'Herramientas ofimáticas y programación', desc: 'Aprende Word, Excel, fundamentos de programación y más. Habilidades prácticas para el mercado laboral actual.' },
    { emoji: '💡', color: 'linear-gradient(135deg, #0d6b6e, #14a0a5)', tag: 'Desarrollo personal', titulo: 'Emprendimiento y finanzas personales', desc: 'Cursos para fortalecer tus competencias en negocios, emprendimiento y manejo inteligente del dinero.' },
  ];

  return (
    <section style={{background: '#fff', padding: '70px 5%'}}>
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <div style={{color: '#1a3a8f', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px'}}>Nuestros programas</div>
        <h2 style={{fontSize: '32px', fontWeight: 800, color: '#0d1b4b'}}>Elige tu camino formativo</h2>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
        {programas.map((p, i) => (
          <div key={i} style={{border: '1px solid #e0e6f5', borderRadius: '14px', overflow: 'hidden'}}>
            <div style={{height: '140px', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px'}}>
              {p.emoji}
            </div>
            <div style={{padding: '22px'}}>
              <span style={{display: 'inline-block', background: '#eef2ff', color: '#1a3a8f', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px', marginBottom: '12px', textTransform: 'uppercase'}}>{p.tag}</span>
              <h3 style={{fontSize: '17px', fontWeight: 700, color: '#0d1b4b', marginBottom: '8px'}}>{p.titulo}</h3>
              <p style={{fontSize: '13px', color: '#5a6a8a', lineHeight: 1.6, marginBottom: '18px'}}>{p.desc}</p>
              <a href="#" style={{color: '#1a3a8f', fontSize: '13px', fontWeight: 700, textDecoration: 'none'}}>Ver más →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}