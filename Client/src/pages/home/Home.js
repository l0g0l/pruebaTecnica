import React from 'react';
import useFetch from '../../hooks/useFetch';
import ProductTable from '../../components/ProductTable/ProductTable';
import Form from '../../components/Form/Form';


const Home = () => {

  const datasql = useFetch('http://localhost:5000/api/products')
  
  return (
    <div className="App">
      <Form />
      <br/>
      <ProductTable products={datasql} />

    </div>
  );
}

export default Home;