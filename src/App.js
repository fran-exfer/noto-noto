import { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import notoReducer from './utils/notoReducer';
import NotoContext from './utils/NotoContext';

import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';

export default function App() {
  // Get initial state from localStorage or initialize it
  const loadInitialState = () => {
    const storageNotes = window.localStorage.getItem('NotoNoto_notes');
    const storageTheme = window.localStorage.getItem('NotoNoto_theme');

    return {
      notes: storageNotes === null ? [] : JSON.parse(storageNotes),
      theme: storageTheme === null ? 'light' : storageTheme,
    };
  };

  /*
   * We'll use a reducer to centralize and abstract state-modifying actions.
   * We'll use React Context API to provide this reducer logic to all components
   * that need it.
   */
  const centralState = useReducer(notoReducer, loadInitialState());

  const [state] = centralState;
  console.log(state);

  /*
   * Save to localStorage whenever the state changes
   */
  useEffect(() => {
    window.localStorage.setItem('NotoNoto_notes', JSON.stringify(state.notes));
    window.localStorage.setItem('NotoNoto_theme', state.theme);
  }, [state]);

  /*
   * Theming is done by appending the theme value from the state as a CSS
   * class. This way, if the theme is 'light', className for the app would
   * be 'app light'. Not implemented as a BEM modifier (app--light) for
   * JS code clarity.
   */
  return (
    <NotoContext.Provider value={centralState}>
      <main className={`app ${state.theme}`}>
        <Router>
          <Navbar />
          <div className="app__content">
            <Route path="/" component={NoteList} />
          </div>
          <Route path={['/note/:id', '/note']} component={NoteModal} />
        </Router>
      </main>
    </NotoContext.Provider>
  );
}
