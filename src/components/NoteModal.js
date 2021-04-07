import { useContext, useEffect, useRef } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import NotoContext from '../utils/NotoContext';

export default function NoteModal() {
  const [state] = useContext(NotoContext);
  const history = useHistory();
  const { id } = useParams();

  const titleInput = useRef('');
  const contentTextarea = useRef('');

  /*
   * If there's a note id in the url, we fill up the form.
   */
  useEffect(() => {
    if (!id) return;
    const selected = state.notes.find((note) => note.id === Number(id));

    if (!selected) {
      history.push('/');
      return;
    }

    titleInput.current.value = selected.title;
    contentTextarea.current.value = selected.content;
  }, [id, history, state.notes]);

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
            ref={titleInput}
          />
          <textarea
            required
            rows="10"
            placeholder="Note content..."
            className="note-modal__note-content"
            ref={contentTextarea}
          ></textarea>
          <div className="note-modal__controls">
            <input
              type="submit"
              value="Save note"
              className="btn btn--primary"
            />
            {id && (
              <button
                className="btn btn--danger"
                onClick={(e) => e.preventDefault}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </article>
    </div>
  );
}
