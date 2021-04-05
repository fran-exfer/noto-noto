import React, { useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export default function NoteModal({ notes, handleSave }) {
  const history = useHistory();
  const { id } = useParams();

  const titleInput = useRef('');
  const contentTextarea = useRef('');

  /*
    If there's a note id in the url, we will fill up the form.
  */
  useEffect(() => {
    if (!id) return;

    const selected = notes.find((note) => note.id === Number(id));

    // Id doesn't exist: go to index! Prevents manual urls.
    if (!selected) {
      history.push('/');
      return;
    }

    titleInput.current.value = selected.title;
    contentTextarea.current.value = selected.content;
  }, [id, history, notes]);

  return (
    <div className="fixed left-0 top-0 w-full h-full overflow-y-scroll | bg-black bg-opacity-50 | flex justify-center items-center">
      <article className="bg-white rounded-lg shadow-md p-4 | flex-1 max-w-4xl m-10 | relative">
        <div className="absolute right-2 top-1">
          <button
            className="px-2 py-0.5 | text-2xl | text-gray-400 hover:text-blue-500"
            onClick={() => history.push('/')}
          >
            &times;
          </button>
        </div>
        <form
          onSubmit={(e) =>
            handleSave(
              e,
              id,
              {
                title: titleInput.current.value,
                content: contentTextarea.current.value,
              },
              history
            )
          }
        >
          <input
            type="text"
            placeholder="Note title..."
            className="text-xl w-full pl-1 pr-1 pt-2 pb-2 mb-4 | border-b-2 focus:border-blue-400"
            required
            ref={titleInput}
          />
          <textarea
            rows="10"
            placeholder="Note content..."
            className="w-full p-2 mb-4 | border-l-2 focus:border-blue-400"
            required
            ref={contentTextarea}
          ></textarea>
          <div className="flex justify-between">
            <input
              type="submit"
              value="Save note"
              className="btn btn-primary"
            />
            {id && <button className="btn btn-delete">Delete</button>}
          </div>
        </form>
      </article>
    </div>
  );
}
