import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Compteur React</h1>
      <p>Valeur actuelle : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={() => setCount(count - 1)}>Décrémenter</button>
      <button onClick={() => setCount(0)}>Réinitialiser</button>
    </div>
  );
}

export default App;