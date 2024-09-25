export function Card({
  children
}){
  return (
    <div style={{
      border: '1px solid white',
      borderRadius: '20px',
      padding: '10px'
    }}>
      <h1>Título do Card</h1>
      {children}
      <h4>Descrição do Card</h4>
    </div>
  )
}