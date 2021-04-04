import React from 'react';
import Note from './Note';

export default function NoteList({ notes }) {
  return (
    <>
      <section className="bg-gray-100 | p-8">
        <button className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 focus:ring-2 focus:ring-blue-700 transition-all text-white | px-4 py-2 | rounded-lg">
          Add note
        </button>
      </section>
      <section className="bg-gray-100 | flex-1 | p-8 pt-0 | flex flex-wrap content-start">
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </section>
    </>
  );
}
