import Header from './Components/Header';
import Product from './Components/Product';
import { useState } from 'react';
function App() {
  const [id,setId]=useState(null);
  return (
    <>
     <Header setId={setId} />
     <Product id={id} />
    </>
  );
}

export default App;
