
import { useState } from "react";
import "./style.css";

const N1 = () => {
  const [busqueda, setBusqueda] = useState("");
  const [a, av] = useState([]); //vector de gifs
  const buscarGif = async () => {
    /* const apiKey = "wm7CZ8ZPbw9RYUQ2hmL0SczO20wO8WH1";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${busqueda}&limit=3`; */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=hWEGSV1fZZjDFQkzjg3ImFymiLlGopgR&q=blanca nieves&limit=5`; 
    const respuesta = await fetch(url)   
    const datos = await respuesta.json();
    av(datos.data);
  };
  return (
    <div>
      <h1>Buscador de GIFs</h1>
      <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
      <button onClick={buscarGif}> Buscar </button>
      <div className="imagenes">
            {a.map((i) => (
                <div key={i.id}>
                {/* <img src={i.images.fixed_height.url} alt="GIF" />                 */}
                {/* <img src={i.images.downsized.url} alt="GIF" />      */}
                <img src={i.images.fixed_width.url} alt="GIF" />     
                {/* <img src={i.images.original.url} alt="GIF" />                 */}
                <p>{i.title}</p>
                </div>         
            ))}
      </div>

    </div>
  );
};

export default N1;
