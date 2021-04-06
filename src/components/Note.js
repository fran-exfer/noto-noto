import React from 'react';
import { Link } from 'react-router-dom';

export default function Note({ note, theme }) {
  return (
    <Link
      to={`/note/${note.id}`}
      className={`${
        theme === 'light'
          ? 'bg-white hover:bg-blue-50 border-gray-200'
          : 'bg-gray-800 text-gray-200 hover:bg-gray-700 border-gray-700'
      }
         cursor-pointer transition-all rounded-lg p-4 shadow-md border | w-full md:max-w-xs max-h-60 | md:mr-8 mb-8`}
    >
      <h1 className="text-xl mb-3">{note.title}</h1>
      <p>
        {note.content.substring(0, 200).trim()}
        {note.content.length > 200 ? '...' : ''}
      </p>
    </Link>
  );
}
