import SectionLists from './SectionLists';

const lists = [
  {
    id: crypto.randomUUID(),
    name: "Winter's Orbit",
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Dial D for Deadman',
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    name: 'Words And Things',
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    name: 'The Galaxy, And The Ground Within',
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Setemi the Instructor',
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Jerry the Principal',
    rating: 5,
  },
];

function App() {
  return (
    <>
      {lists.map((list) => {
        return (
          <SectionLists key={list.id} name={list.name} rating={list.rating} />
        );
      })}
    </>
  );
}

export default App;
