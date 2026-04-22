export default function Beneficios() {
  const beneficios = [
    { icono: '📱', titulo: '100% virtual y flexible', desc: 'Estudia desde tu celular, tablet o computador. Sin horarios fijos, sin desplazamientos.' },
    { icono: '👩‍🏫', titulo: 'Acompañamiento personalizado', desc: 'Nuestros asesores pedagógicos te guían en cada etapa del proceso formativo.' },
    { icono: '📝', titulo: 'Simulacros reales', desc: 'Practica con exámenes diseñados con el mismo formato del examen oficial del ICFES.' },
    { icono: '🏆', titulo: 'Respaldo legal', desc: 'Empresa legalmente constituida en Colombia, con domicilio en Medellín, Antioquia.' },
    { icono: '💰', titulo: 'Accesible y económico', desc: 'Programas pensados para que todos los colombianos puedan acceder a educación de calidad.' },
    { icono: '🌐', titulo: 'Cobertura nacional', desc: 'Atiende desde cualquier ciudad o municipio de Colombia. Sin barreras geográficas.' },
  ];

  return (
    <section style={{background: '#0d1b4b', padding: '70px 5%'}}>
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <div style={{color: '#f0a500', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px'}}>¿Por qué elegirnos?</div>
        <h2 style={{fontSize: '32px', fontWeight: 800, color: '#fff'}}>Ventajas de estudiar con nosotros</h2>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '28px'}}>
        {beneficios.map((b, i) => (
          <div key={i} style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '28px 24px'}}>
            <div style={{width: '44px', height: '44px', background: 'rgba(240,165,0,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '20px'}}>
              {b.icono}
            </div>
            <h4 style={{color: '#fff', fontSize: '15px', fontWeight: 700, marginBottom: '8px'}}>{b.titulo}</h4>
            <p style={{color: '#7a8fb5', fontSize: '13px', lineHeight: 1.6}}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}