import React from 'react';

export default function Nav({ theme, handleToggleTheme }) {
  return (
    <nav className="bg-blue-500 text-white | relative px-8 py-4 | shadow-md | flex justify-between">
      <h1 className="text-2xl">NotoNoto</h1>
      <button
        className="text-2xl bg-blue-400 rounded-full"
        onClick={handleToggleTheme}
      >
        {theme === 'light' ? '🕶' : '☀'}
      </button>
    </nav>
  );
}
