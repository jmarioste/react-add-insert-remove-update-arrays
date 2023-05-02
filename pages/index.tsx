import { useState } from "react";

export default function Home() {
  const [array, setArray] = useState([1, 2, 3, 4]);
  const addItem = () => {
    const nextVal = array.length + 1;
    // add item at the end
    const arrayCopy = [...array, nextVal];

    // add item at the start
    // const arrayCopy = [nextVal, ...array];
    setArray(arrayCopy);
  };
  return (
    <div>
      <p>{array.join(",")}</p>
      <button onClick={addItem}>Add item</button>
    </div>
  );
}
