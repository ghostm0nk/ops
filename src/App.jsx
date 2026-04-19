import React from 'react';
import { Navigate } from './routes';
import { useSupabase } from './context/SupabaseContext';

function App() {
  const { session } = useSupabase();

  if (!session) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigate />
    </div>
  );
}

export default App;