export default function Footer() {
  return (
    <footer style={{background: '#070e2e', padding: '50px 5% 28px'}}>
      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '40px'}}>
        <div>
          <span style={{color: '#fff', fontSize: '18px', fontWeight: 700, display: 'block', marginBottom: '14px'}}>
            Instituto <span style={{color: '#f0a500'}}>Ingenio</span> SAS
          </span>
          <p style={{color: '#5a6a8a', fontSize: '13px', lineHeight: 1.7}}>
            Servicios educativos virtuales de acompañamiento y preparación académica para el Examen de Validación del Bachillerato. Medellín, Antioquia, Colombia.
          </p>
        </div>
        <div>
          <h4 style={{color: '#fff', fontSize: '14px', fontWeight: 700, marginBottom: '16px'}}>Programas</h4>
          {['Bachillerato ICFES', 'Ofimática', 'Programación', 'Emprendimiento', 'Finanzas personales'].map((item, i) => (
            <a key={i} href="#" style={{display: 'block', color: '#5a6a8a', fontSize: '13px', textDecoration: 'none', marginBottom: '10px'}}>{item}</a>
          ))}
        </div>
        <div>
          <h4 style={{color: '#fff', fontSize: '14px', fontWeight: 700, marginBottom: '16px'}}>Institución</h4>
          {['Nosotros', '¿Cómo funciona?', 'Contacto', 'Términos y condiciones', 'Política de privacidad'].map((item, i) => (
            <a key={i} href="#" style={{display: 'block', color: '#5a6a8a', fontSize: '13px', textDecoration: 'none', marginBottom: '10px'}}>{item}</a>
          ))}
        </div>
      </div>
      <div style={{borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <p style={{color: '#3a4a6a', fontSize: '12px'}}>© 2026 Instituto Ingenio SAS — Medellín, Colombia</p>
        <p style={{color: '#3a4a6a', fontSize: '12px'}}>Hecho con 💛 para Colombia</p>
      </div>
    </footer>
  );
}