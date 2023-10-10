import { useState } from 'react';

import './App.css';

function App() {
  const [subs, setSubs] = useState([
    {
      nick: 'Ordieres',
      subMonths: 3,
      avatar: 'https://i.pravatar.cc/150?u=ordieres',
      description: 'Professional crossfitter'
    },
    {
      nick: 'Fabio',
      subMonths: 5,
      avatar: 'https://i.pravatar.cc/150?u=fabio',
      description: 'Pokèmon trainer'
    },
    {
      nick: 'Fonso',
      subMonths: 7,
      avatar: 'https://i.pravatar.cc/150?u=fonso'
    }
  ]);

  return (
    <div className="App">
      <h1>Andrés subs</h1>
      <ul>
        {subs.map((sub) => {
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for{sub.nick}`} />
              <h4>
                {sub.nick} (<small>{sub.subMonths}</small>)
              </h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
