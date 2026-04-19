import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SupabaseProvider } from './context/SupabaseContext';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SupabaseProvider value={{ supabase, session: supabase.auth.user() }}>
      <App />
    </SupabaseProvider>
  </React.StrictMode>
);