import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { products } from "../../../productsMock";

const DashboardComponent = () => {
  const rellenar = () => {
    products.forEach((product) => {
      let refCollection = collection(db, "products");
      addDoc(refCollection, product);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>Rellenar la base de datos</button>
    </div>
  );
};

export default DashboardComponent;
