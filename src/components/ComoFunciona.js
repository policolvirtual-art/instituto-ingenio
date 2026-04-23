export default function ComoFunciona() {
  const pasos = [
    { num: 1, titulo: 'Regístrate', desc: 'Crea tu cuenta en minutos y elige el programa que mejor se adapte a ti.' },
    { num: 2, titulo: 'Estudia a tu ritmo', desc: 'Accede al material didáctico virtual desde cualquier dispositivo, cuando quieras.' },
    { num: 3, titulo: 'Practica con simulacros', desc: 'Evalúa tu avance con exámenes de práctica similares al examen oficial del ICFES.' },
    { num: 4, titulo: 'Presenta y certifícate', desc: 'Presenta el examen de validación y obtén tu título de bachiller oficial.' },
  ];

  return (
    <section style={{background: '#f5f7ff', padding: '70px 5%', textAlign: 'center'}}>
      <style>{`
        .cf-grid { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; }
        .cf-card { background: #fff; border-radius: 14px; padding: 32px 24px; box-shadow: 0 2px 16px rgba(13,27,75,0.07); flex: 1; min-width: 180px; max-width: 230px; }
        @media (max-width: 768px) {
          .cf-card { min-width: calc(50% - 12px); max-width: calc(50% - 12px); box-sizing: border-box; padding: 24px 16px; }
        }
        @media (max-width: 480px) {
          .cf-card { min-width: 100%; max-width: 100%; }
        }
      `}</style>
      <div style={{color: '#1a3a8f', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px'}}>Proceso simple</div>
      <h2 style={{fontSize: '32px', fontWeight: 800, color: '#0d1b4b', marginBottom: '50px'}}>¿Cómo funciona?</h2>
      <div className="cf-grid">
        {pasos.map((paso) => (
          <div key={paso.num} className="cf-card">
            <div style={{width: '48px', height: '48px', background: '#0d1b4b', color: '#f0a500', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '18px', margin: '0 auto 16px'}}>
              {paso.num}
            </div>
            <h3 style={{fontSize: '15px', fontWeight: 700, color: '#0d1b4b', marginBottom: '10px'}}>{paso.titulo}</h3>
            <p style={{fontSize: '13px', color: '#5a6a8a', lineHeight: 1.6}}>{paso.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}