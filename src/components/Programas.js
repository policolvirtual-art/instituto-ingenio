export default function Programas() {
  const programas = [
    {
      emoji: '🎓',
      color: 'linear-gradient(135deg, #1a3a8f, #2d5bbf)',
      tag: 'Principal',
      titulo: 'Validación de Bachillerato ICFES',
      desc: 'Acompañamiento completo para personas que no han finalizado su bachillerato y desean culminarlo mediante el Examen de Validación del ICFES. Incluye simulacros, talleres y material didáctico virtual.',
      precio: 'Desde $199.000'
    },
    {
      emoji: '🏫',
      color: 'linear-gradient(135deg, #0d6b6e, #14a0a5)',
      tag: 'Instituciones',
      titulo: 'Preparación Saber 11° para Colegios',
      desc: 'Convenios directos con instituciones educativas públicas y privadas para preparar a estudiantes de grado 10° y 11° en las Pruebas Saber 11°. Modalidad virtual o presencial.',
      precio: 'Precio según convenio'
    },
    {
      emoji: '💻',
      color: 'linear-gradient(135deg, #c47f00, #f0a500)',
      tag: 'Tecnología',
      titulo: 'Ofimática y Programación',
      desc: 'Cursos prácticos de herramientas ofimáticas como Word y Excel, fundamentos de programación y tecnología. Habilidades esenciales para el mercado laboral actual.',
      precio: 'Próximamente'
    },
    {
      emoji: '💡',
      color: 'linear-gradient(135deg, #6b1a6e, #a514a0)',
      tag: 'Desarrollo personal',
      titulo: 'Emprendimiento y Finanzas Personales',
      desc: 'Aprende a gestionar tu dinero inteligentemente y a desarrollar ideas de negocio. Cursos diseñados para fortalecer tus competencias en emprendimiento y finanzas.',
      precio: 'Próximamente'
    },
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
              <p style={{fontSize: '13px', color: '#5a6a8a', lineHeight: 1.6, marginBottom: '12px'}}>{p.desc}</p>
              <div style={{fontSize: '14px', fontWeight: 700, color: '#f0a500', marginBottom: '14px'}}>{p.precio}</div>
              <a href="#contacto" style={{color: '#1a3a8f', fontSize: '13px', fontWeight: 700, textDecoration: 'none'}}>Más información →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}