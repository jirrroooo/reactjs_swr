import { useState } from 'react';
import Users from './Users';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(prevVisible => !prevVisible)}>
        Show Users
      </button>
      {visible && <Users />}
    </div>
  );
}

export default App;
