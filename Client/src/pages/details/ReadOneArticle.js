import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../details/ReadOneArticle.scss';


const ReadOneArticle =  (item) => { // necesito que me llegue por parámetro el articulo que le marco en el navegador
  console.log(item); // despliego details y dentro de match.params llego al ID
  let id = item.match.params.id  
  const [details, setDetails] = useState([])
  const [product_id, setId] = useState(id)
  
  const fetchDetails = async () => {
   
    const res = await axios.get(`http://localhost:5000/api/products/details/${product_id}`)
    setDetails(res.data);
  }
  
  useEffect(() => {

    fetchDetails()

  }, []);

  return (
    <div >
     <Link to="/"><button type="button" className="back">Atrás</button></Link>
   
    <div className="article">
    {details.map((item) => (
        <>
        <h2 className="article-h2">{item.nombre}</h2>

      
        <h5 className="article-h5">{item.descripcion}</h5>
        <div className="article wrapper">
        <div className="article-div1">
          <img className="article-div1-img" src={item.url} alt={item.nombre} />
        </div>
      
       <div className="article-div2">
         <h4 className="article-div2-h4">{item.nombre_comercial}</h4>
         <h5 className="article-div2-h5">{item.razon_social}</h5>
         <h6 className="article-div2-h6">{item.direccion}</h6>
         <h6 className="article-div2-h6"> {item.codigo_postal}</h6>
       </div>
       </div>
       </>
       
      ))  
     
    }
    </div>
    </div>
  )
}
export default ReadOneArticle
