import { useContext } from 'react';
import { Link } from 'react-router-dom';

import NotoContext from '../utils/NotoContext';

import Note from './Note';

export default function NoteList() {
  const [state] = useContext(NotoContext);

  return (
    <section className="note-list">
      <div className="note-list__controls">
        <Link to="/note" className="btn btn--primary">
          Add note
        </Link>
      </div>
      <div className="note-list__notes">
        {state.notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
}
