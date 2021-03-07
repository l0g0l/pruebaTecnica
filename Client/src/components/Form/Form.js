import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import '../Form/Form.css';
  // cuando pulses el botón de buscar llamaremos al endpoint http://localhost:5000/api/products/search/VALUEDELSEARCH-INPUT, en el backend haremos 2 queries:
  // LITERAL: VALUEDELSEARCH-INPUT

  //   la primera buscará el literal que hayas metido sobre el campo descripcion/nombre de la tabla products
  //     select * from products where nombre like '%LITERAL%'
  //   la segunda query buscar^ el literal que hayas metido sobre el campo nombre de la tabla manufacturers
  //     select * from manufacturers where nombre like '%LITERAL'

  //   Dependiendo de la query que contenga resultados resultado_de_la_query.length > 0 sabrás si lo que has encontrado es un artículo o un fabricante
  //   Dependiendo de si es uno u otra tendrás que pintar una tabla u otra en React




 const Form = () => {
  const [type, setType] = useState([])

  const datatype = useFetch(`http://localhost:5000/api/products/type`)
  
   const handleSubmit = (event) => {
		event.preventDefault();

	}
  
   const enviar = () => {
	
		// this.setState({ dataInput: [...this.state.dataInput, auxiliar.value] })
		
  }

  return (
    <div className="search">

      <form onSubmit={handleSubmit} >

        <input className="search-input" type="text" placeholder="¿Qué planta o Vivero buscas?" />

        <button onClick={enviar} className="search-div-button" type="submit" name='buscar'><img className="search-div-img" src="maceta.png" alt="" /></button>

      </form>

    </div>
  )
}
export default Form

