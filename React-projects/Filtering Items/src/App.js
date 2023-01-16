import { useState, useRef, useMemo } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLocaleLowerCase());
    });
  }, [items, query]);

  function submitHandler(e) {
    e.preventDefault();

    const item = inputRef.current.value;
    if (item === '') return;

    setItems((prev) => [...prev, item]);
    inputRef.current.value = '';
  }

  return (
    <div className="app">
      <label>
        Search:
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
        />
      </label>
      <form onSubmit={submitHandler}>
        <label>
          Add item: <input ref={inputRef} type="text" />
        </label>
        <button type="submit">Add</button>
      </form>
      <div className="items">
        <h2>Items:</h2>
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
