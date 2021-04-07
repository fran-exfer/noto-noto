import { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import notoReducer from './utils/notoReducer';
import NotoContext from './utils/NotoContext';

import Navbar from './components/Navbar';
import NoteList from './components/NoteList';

export default function App() {
  // We'll use a reducer to centralize and abstract state-modifying actions.

  // We'll use React Context API to provide this reducer logic to all components
  // that need it.
  const centralState = useReducer(notoReducer, { notes: [], theme: 'light' });

  return (
    <NotoContext.Provider value={centralState}>
      <main class="app">
        <Router>
          <Navbar />
          <Route path="/" component={() => <NoteList />} />
        </Router>
      </main>
    </NotoContext.Provider>
  );
}
