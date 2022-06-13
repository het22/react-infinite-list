import { faker } from '@faker-js/faker';

export function createItems(count) {
  return [...Array(count).keys()].map(key => ({
    id: key,
    name: faker.name.findName(),
    email: faker.internet.email(),
    bio: faker.lorem.lines(5)
  }));
}

export function Item({ item }) {
  return (
    <li key={item.id}>
      <section>
        <h2>{item.name}</h2>
        <h3>{item.email}</h3>
      </section>
      <p>{item.bio}</p>
    </li>
  );
}
