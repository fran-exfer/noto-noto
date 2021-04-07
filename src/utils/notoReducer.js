/*
 * Centralized state-management

 * I've settled on using a reducer function for all state management related
 * code to make the application more scalable and to make code on different
 * components more abstract.
 */

export default function notoReducer(state, action) {
  switch (action.type) {
    /*
     * Creating/Updating notes
     */
    case 'saveNote':
      if (action.id) {
        // Updating a note
        const noteIndex = state.notes.findIndex(
          (note) => note.id === action.id
        );
        return {
          ...state,
          notes: [
            ...state.notes.slice(0, noteIndex),
            { id: action.id, title: action.title, content: action.content },
            ...state.notes.slice(noteIndex + 1),
          ],
        };
      } else {
        // Creating a note
        return {
          ...state,
          notes: [
            ...state.notes,
            { id: Date.now(), title: action.title, content: action.content },
          ],
        };
      }

    /*
     * Toggling between light/dark themes
     */
    case 'toggleTheme':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };

    default:
      throw new Error('Not a valid action for notoReducer.');
  }
}
