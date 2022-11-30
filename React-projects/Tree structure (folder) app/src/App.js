import Entry from './components/Entry';

const folder = {
  children: [
    { name: 'Level 1', children: [{ name: 'Level 2' }] },
    {
      name: 'Level 1',
      children: [
        { name: 'Level 2', children: [{ name: 'Level 3' }] },
        { name: 'Level 2' },
      ],
    },
    { name: 'Level 1', children: [{ name: 'Level 2' }] },
  ],
};

function App() {
  return (
    <div className="entry-canvas">
      {folder.children.map((entry, index) => (
        <Entry key={index} entry={entry} depth={1} />
      ))}
    </div>
  );
}

export default App;
