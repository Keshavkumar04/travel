export default function Stats({ items }) {
  // Early conditioning
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀 </em>
      </p>
    );

  const numItems = items.length; // WE DONT NEED STATE FOR IT AS IT CAN BE CALCULATED FROM EXSISTING DATA ONLY
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list , and u already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
