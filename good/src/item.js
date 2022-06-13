import { faker } from '@faker-js/faker';
import { useEffect, useRef } from 'react';

export function createItems(count) {
  return [...Array(count).keys()].map(key => ({
    id: key,
    name: faker.name.findName(),
    email: faker.internet.email(),
    bio: faker.lorem.lines(5)
  }));
}

export function Item({ index, item, style, setSize }) {
  const ref = useRef(null);

  useEffect(() => {
    setSize(index, ref.current.getBoundingClientRect().height);
  }, [index, setSize]);

  return (
    <div className="ItemWrapper" style={style}>
      <li ref={ref} key={item.id}>
        <section>
          <h2>{item.name}</h2>
          <h3>{item.email}</h3>
        </section>
        <p>{item.bio}</p>
      </li>
    </div>
  );
}
