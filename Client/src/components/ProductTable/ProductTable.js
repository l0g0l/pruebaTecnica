import React from 'react';
import './ProductTable.scss';
import { Link } from 'react-router-dom';



// genera el orden alfabético
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config); // hook
  console.log(sortConfig); // null y config null items solo 5 articulos
  

  const sortedItems = React.useMemo(() => { // Hook useMemo solo clasificamos los datos cuando es necesario. Ahora estamos ordenando todos los datos en cada renderizado, lo que conducirá a problemas de rendimiento, es una forma de almacenar en caché, o memorizar cosas de trabajo más costoso
    let sortableItems = [...items];
    console.log(sortableItems ); // los 4 primeros articulos
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => { //sort() Ordenará matrices de números y cadenas sin un argumento adicional. sortable.sort le pasamos una función. Verificamos si la propiedad name del primer argumento A está antes del segundo argumento b, y si es así, devolvemos un valor negativo. Esto indica que adebe aparecer antes B en la lista. Si el nombre del primer argumento está después del nombre del segundo argumento, devolvemos un número positivo, lo que indica que debemos colocar B antes A. Si los dos son iguales (es decir, ambos tienen el mismo nombre), devolvemos 0 y no hace nada.
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
  
    return sortableItems;
   
  }, [items, sortConfig]);

  // colocamos los articulos por orden ascendente o descendente
  const requestSort = (key) => { 
    console.log(key ) // nada

    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
   
  };

  // const changeRelevance = () => {
  //   console.log(sortConfig);
    
  //   if(sortedItems.relevancia === 5) {
  //     <span class = "glyphicon glyphicon-leaf"> </ span>
  //   }else if (sortedItems.relevancia === 4) {
  //     <span class = "glyphicon glyphicon-leaf"> </ span>
  //   }else if (sortedItems.relevancia === 3) {
  //     <span class = "glyphicon glyphicon-leaf"> </ span>
  //   }else if (sortedItems.relevancia === 2) {
  //     <span class = "glyphicon glyphicon-leaf"> </ span>
  //   }else if (sortedItems.relevancia === 1) {
  //     <span class = "glyphicon glyphicon-leaf"> </ span>
  // } 

  // console.log(sortConfig); // null
  // console.log(sortedItems)  // 10 artículos
  return { items: sortedItems, requestSort, sortConfig };
};



const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined; // ?????????
  };
  return <div>
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('nombre')}
              className={getClassNamesFor('nombre')}
            >
              Artículo
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('precio')}
              className={getClassNamesFor('precio')}
            >
              Precio
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('relevancia')}
              className={getClassNamesFor('relevancia')}
            >
              Relevancia
            </button>
          </th>
        </tr>
      </thead>
      <tbody >
        {items.map((item) => ( // ?????????
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.precio}€</td>
            <td className="td">{item.relevancia}</td>
            <td>{<Link to={`/details/${item.ID}`}>
              <button >
                Detalle
             </button>
            </Link>}</td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
};
export default ProductTable