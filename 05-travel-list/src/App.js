export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for you 😍 trip?</h3>
    </div>
  );
}

function Item() {
  return <h4>Item Name</h4>;
}

function PackingList() {
  return (
    <div className="list">
      <Item />
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list and you already packed Y (Z%)?</em>
    </footer>
  );
}
