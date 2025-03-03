
function Conjutnos() {

  const conjuntoFinito = ["{1, 2, 3}"];
  const conjuntoInfinito = ["{elemento1, elemento2,...}"];
  const conjuntoVacio = ["{} o el número 0 (cero tachado)"];
  const conjuntoUnitario = ["Santiago Arocha Pérez"];
  const conjuntoUniversal = ["Estudiantes"];

  return (
    <>
      <h2>CONJUNTOS</h2>
      <h3>¿Que es un Conjunto?</h3>
      <p>Es una agrupación de elementos de algún tipo, o agrupados en base a alguna categorización</p>
      <br />
      <div>De estos, hay <strong>TIPOS</strong></div>
      <h3 style={{color:"red", textDecoration: "underline"}}><strong>TIPOS</strong></h3>
      <ul>
        <li style={{color:"red"}}>Finitos </li>
        <p style={{color:"red"}}>Con un límite en la cantidad de elementos que pueden componer el conjunto</p>
        <div style={{color:"red"}}>Ejemplo</div>
        <div>Letra: Números del 1 al 3</div>
        <p>{conjuntoFinito}</p>
      </ul>
      <ul>
        <li style={{color:"red"}}>Infinitos ♾️</li>
        <p style={{color:"red"}}>SIN un límite en la cantidad de elementos que pueden componer el conjunto</p>
        <div style={{color:"red"}}>Ejemplo</div>
        <div>Letra: Números del 1 al infinito</div>
        <p>{conjuntoInfinito}</p>
      </ul>
      <ul>
        <li style={{color:"red"}}>Conjuntos Vacíos {} </li>
        <p style={{color:"red"}}>SIN elementos que puedan componer este conjunto</p>
        <div style={{color:"red"}}>Ejemplo</div>
        <div>Letra: Número de celu del desarrollador del sitio</div>
        <p>{conjuntoVacio}</p>
      </ul>
      <ul>
        <li style={{color:"red"}}>Conjuntos Unitarios</li>
        <p style={{color:"red"}}>SOLO UN elemento puede componer este conjunto</p>
        <div style={{color:"red"}}>Ejemplo</div>
        <div>Letra: Mi nombre completo</div>
        <p>{conjuntoUnitario}</p>
      </ul>
      <ul>
        <li style={{color:"red"}}>Conjuntos Universales</li>
        <p style={{color:"red"}}>TODOS los elementos dentro de un contexto pueden componer este conjunto</p>
        <div style={{color:"red"}}>Ejemplo</div>
        <div>Letra: Quienes estudian?</div>
        <p>{conjuntoUniversal}</p>
      </ul>
    </>
  )
}

export default Conjutnos
