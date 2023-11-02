import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState(""); // This is for the text
  const [quantity, setQuantity] = useState(1); // This is for number of items

  // const [items, setItems] = useState([]); // As it is a empty array ** WE NEED PACKING LIST TO ADD ITEMS IN HE LIST
  // FORM TO PACKING LIST SO WE USE IT IN COMMAN PARENT
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; // Just return if nothing is put

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do u need for your trip 🤔 ? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value);
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
