import React from 'react';
import { useSupabase } from './context/SupabaseContext';
import Navigate from './routes';

function App() {
  const { session } = useSupabase();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigate />
    </div>
  );
}

export default App;