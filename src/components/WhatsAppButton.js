export default function WhatsAppButton() {
  const url = "https://wa.me/573103759092?text=Hola%2C%20me%20interesa%20inscribirme%20en%20Instituto%20Ingenio.";
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{position:"fixed",bottom:"24px",right:"24px",background:"#25d366",borderRadius:"50%",width:"56px",height:"56px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",zIndex:999}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{width:"32px",height:"32px"}} />
    </a>
  );
}
