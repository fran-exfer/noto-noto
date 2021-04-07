import { useContext } from 'react';
import { Link } from 'react-router-dom';

import NotoContext from '../utils/NotoContext';

export default function NoteModal() {
  const [state] = useContext(NotoContext);

  return (
    <div className="note-modal">
      <article className={`note-modal__content ${state.theme}`}>
        <Link to="/" className="note-modal__close">
          &times;
        </Link>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            required
            type="text"
            placeholder="Note title..."
            className={`note-modal__note-title ${state.theme}`}
          />
          <textarea
            required
            rows="10"
            placeholder="Note content..."
            className="note-modal__note-content"
          ></textarea>
          <div className="note-modal__controls">
            <input
              type="submit"
              value="Save note"
              className="btn btn--primary"
            />
            {/* TODO LATER
            {id && (
              <button
                className="btn btn-delete"
                onClick={(e) => handleDelete(e, id, history)}
              >
                Delete
              </button>
            )
            */}
          </div>
        </form>
      </article>
    </div>
  );
}
