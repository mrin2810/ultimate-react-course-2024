import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDiscription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, num) => num + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        placeholder="Item..."
        onChange={(e) => setDiscription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
