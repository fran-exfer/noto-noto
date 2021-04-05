import React from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';

export default function NoteList({ notes }) {
  return (
    <>
      <section className="bg-gray-100 | p-8">
        <Link to="/note" className="btn btn-primary">
          Add note
        </Link>
      </section>
      <section className="bg-gray-100 | flex-1 | p-8 pt-0 | flex flex-wrap content-start">
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </section>
    </>
  );
}
