import React, { useState } from 'react';
import { useSupabase } from '../context/SupabaseContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { supabase } = useSupabase();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) console.error(error);
  };

  return (
    <div className="w-full max-w-md m-auto p-4 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-200 rounded-lg"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-200 rounded-lg"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;