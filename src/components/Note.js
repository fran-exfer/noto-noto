import { useContext } from 'react';
import { Link } from 'react-router-dom';
import NotoContext from '../utils/NotoContext';

export default function Note({ note }) {
  const [state] = useContext(NotoContext);

  return (
    <Link to={`/note/${note.id}`} className={`note ${state.theme}`}>
      <h1 className="note__title">{note.title}</h1>
      <p className="note__content">
        {note.content.substring(0, 200).trim()}
        {note.content.length > 200 ? '...' : ''}
      </p>
    </Link>
  );
}
