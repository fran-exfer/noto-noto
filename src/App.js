import { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import notoReducer from './utils/notoReducer';
import NotoContext from './utils/NotoContext';

import Navbar from './components/Navbar';
import NoteList from './components/NoteList';

export default function App() {
  // We'll use a reducer to centralize and abstract state-modifying actions.

  /*
   * We'll use React Context API to provide this reducer logic to all components
   * that need it.
   */
  const centralState = useReducer(notoReducer, {
    notes: [
      { id: 2342424, title: 'Test note', content: 'Test content blabla' },
    ],
    theme: 'light',
  });
  const [state] = centralState;

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
          <div class="app__content">
            <Route path="/" component={NoteList} />
          </div>
        </Router>
      </main>
    </NotoContext.Provider>
  );
}
