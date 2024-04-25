export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  // Derived state
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentatge = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentatge === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list and you already packed 
        ${packedItems} (${percentatge}%)`}
      </em>
    </footer>
  );
}
