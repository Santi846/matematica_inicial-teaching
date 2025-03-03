import { useState } from "react";

function Conjutnos() {

  const conjuntoFinito = ["{1, 2, 3}"];
  const conjuntoInfinito = ["{elemento1, elemento2,...}"];
  const conjuntoVacio = ["{} o el número 0 (cero tachado)"];
  const conjuntoUnitario = ["Santiago Arocha Pérez"];
  const conjuntoUniversal = ["Estudiantes"];

  const [mostrarTemaConjuntos, setMostrarTemaConjuntos] = useState(false);
  const [mostrarTemaConjuntosItemTipo, setMostrarTemaConjuntosItemTipo] = useState(false);

  const handleClickTema = () => {
    if (mostrarTemaConjuntos) {
      setMostrarTemaConjuntos(false);
    }else {
      setMostrarTemaConjuntos(true);
    }
  };

  const handleClickTemaItemTipo = () => {
    if (mostrarTemaConjuntosItemTipo) {
      setMostrarTemaConjuntosItemTipo(false);
    }else {
      setMostrarTemaConjuntosItemTipo(true);
    }
  };

  return (
    <>
      <button onClick={handleClickTema}>CONJUNTOS</button>
      {mostrarTemaConjuntos ? (
        <div>
          <h3>¿Que es un Conjunto?</h3>
      <p>Es una agrupación de elementos de algún tipo, o agrupados en base a alguna categorización. Esto se define como <strong>COMPRENSIÓN</strong>
      <br />
      Y, cuando se detalla, que elementos pertenecen a ese conjunto, se define como <strong>EXTENSIÓN</strong>.
      </p>
      <br />
      <div>De estos, hay <strong>TIPOS</strong>...</div>
      <button style={{color:"red", textDecoration: "underline"}} onClick={handleClickTemaItemTipo}>TIPOS</button>
      {mostrarTemaConjuntosItemTipo ? (
      <div>
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
      </div>
      ): (
        <div></div>
      )}
        </div>
      ) : (
        <div></div>
      )}
      
    </>
  )
}

export default Conjutnos
