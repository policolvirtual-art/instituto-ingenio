export default function Testimonios() {
  const testimonios = [
    { iniciales: 'CM', color: '#1a3a8f', nombre: 'Carlos M.', rol: 'Bachiller validado — Medellín', texto: 'Gracias a Instituto Ingenio pude terminar mi bachillerato sin dejar de trabajar. El material es muy claro y los asesores siempre estuvieron disponibles.' },
    { iniciales: 'LR', color: '#0d6b6e', nombre: 'Lucía R.', rol: 'Bachiller validada — Bogotá', texto: 'Los simulacros me dieron mucha seguridad para el día del examen. Aprobé a la primera y ahora estoy pensando en estudiar una carrera técnica.' },
    { iniciales: 'JP', color: '#c47f00', nombre: 'Jhon P.', rol: 'Estudiante activo — Cali', texto: 'La plataforma es súper fácil de usar. Pude estudiar desde mi celular en los ratos libres. Lo recomiendo a cualquiera que quiera superarse.' },
  ];

  return (
    <section style={{background: '#f5f7ff', padding: '70px 5%'}}>
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <div style={{color: '#1a3a8f', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px'}}>Historias de éxito</div>
        <h2 style={{fontSize: '32px', fontWeight: 800, color: '#0d1b4b'}}>Lo que dicen nuestros estudiantes</h2>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px'}}>
        {testimonios.map((t, i) => (
          <div key={i} style={{background: '#fff', borderRadius: '14px', padding: '28px', border: '1px solid #e0e6f5'}}>
            <div style={{color: '#f0a500', fontSize: '14px', marginBottom: '14px'}}>★★★★★</div>
            <p style={{color: '#3a4a6a', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic'}}>"{t.texto}"</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
              <div style={{width: '38px', height: '38px', borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', color: '#fff', flexShrink: 0}}>
                {t.iniciales}
              </div>
              <div>
                <div style={{fontSize: '14px', fontWeight: 700, color: '#0d1b4b'}}>{t.nombre}</div>
                <div style={{fontSize: '12px', color: '#7a8fb5'}}>{t.rol}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}