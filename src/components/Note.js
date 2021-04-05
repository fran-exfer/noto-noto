import React from 'react';
import { Link } from 'react-router-dom';

export default function Note({ note }) {
  return (
    <article className="bg-white hover:bg-blue-50 cursor-pointer transition-all rounded-lg p-4 shadow-md border border-gray-200 | w-full md:max-w-xs max-h-60 | md:mr-8 mb-8">
      <Link to={`/note/${note.id}`}>
        <h1 className="text-xl mb-3">{note.title}</h1>
        <p>
          {note.content.substring(0, 200).trim()}
          {note.content.length > 200 ? '...' : ''}
        </p>
      </Link>
    </article>
  );
}
