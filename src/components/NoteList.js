import React from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';

export default function NoteList({ notes, theme }) {
  return (
    <>
      <section
        className={`${
          theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-gray-200'
        } | p-8`}
      >
        <Link to="/note" className="btn btn-primary">
          Add note
        </Link>
      </section>
      <section
        className={`${
          theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-gray-200'
        } | flex-1 | p-8 pt-0 | flex flex-wrap content-start`}
      >
        {notes.map((note) => (
          <Note key={note.id} note={note} theme={theme} />
        ))}
      </section>
    </>
  );
}
