import { useCallback, useEffect, useRef, useState } from 'react';
import { createItems, Item } from './item';
import { VariableSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(createItems(10000));
  }, []);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const listRef = useRef(null);
  const sizeMap = useRef({});
  const setSize = useCallback((index, size) => {
    if (size === sizeMap.current[index]) return;
    sizeMap.current = { ...sizeMap.current, [index]: size };
    listRef.current.resetAfterIndex(index);
  }, []);
  const getSize = useCallback(index => sizeMap.current[index] || 50, []);

  return (
    <div className="App">
      <h1>React Infinte List</h1>
      <span>{time.toTimeString()}</span>
      <div className="ListWrapper">
        <AutoSizer>
          {({ width, height }) => (
            <VariableSizeList
              ref={listRef}
              width={width}
              height={height}
              itemCount={items.length}
              itemSize={getSize}
            >
              {({ index, style }) => (
                <Item
                  key={items[index].id}
                  index={index}
                  item={items[index]}
                  style={style}
                  setSize={setSize}
                />
              )}
            </VariableSizeList>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default App;
