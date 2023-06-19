import { useState } from "react";
import ItemListContainer from "./components/common/cartWidget/itemListContainer/ItemListContainer";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  const [saludo, setSaludo] = useState(
    "Hola, bienvenido a la tienda falsa de adidas"
  );

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
