import { useState } from "react";

export function ToDoForm({ onSubmit }) {
  const [item, setNewItem] = useState("");

  const handleSubmit = (e) => {
    /* Form submit handler */
    e.preventDefault();

    if (item === "") return;

    onSubmit(item);

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={item}
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
