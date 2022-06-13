import { useEffect, useState } from 'react';
import { createItems, Item } from './item';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setItems(createItems(100));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>React Infinte List</h1>
      <span>{time.toTimeString()}</span>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
