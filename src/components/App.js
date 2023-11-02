import { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Item from "./Item";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

const getinitialdata = () => {
  const data = JSON.parse(localStorage.getItem("items"));
  if (!data) return [];
  return data;
};

export default function App() {
  const [items, setItems] = useState(getinitialdata);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); // Spreading the original items array and adding the new item to it
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  useEffect(
    function () {
      localStorage.setItem("items", JSON.stringify(items));
    },
    [items]
  );

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    ); // to prevent mistake delete
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
