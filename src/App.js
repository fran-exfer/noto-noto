import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';

export default function App() {
  const [notes, setNotes] = useState(() => {
    const storage = window.localStorage.getItem('NotoNoto_notes');
    return storage === null ? [] : JSON.parse(storage);
  });

  const [theme, setTheme] = useState(() => {
    const storage = window.localStorage.getItem('NotoNoto_theme');
    return storage === null ? 'light' : storage;
  });

  // Save data to local storage when state changes
  useEffect(() => {
    window.localStorage.setItem('NotoNoto_notes', JSON.stringify(notes));
    window.localStorage.setItem('NotoNoto_theme', theme);
  }, [notes, theme]);

  const handleSave = (e, id, data, history) => {
    e.preventDefault();

    if (!id) {
      // Create a new note
      setNotes([
        ...notes,
        {
          id: Date.now(),
          title: data.title,
          content: data.content,
        },
      ]);
    } else {
      // Update current note
      const noteIndex = notes.findIndex((note) => note.id === Number(id));
      console.log(noteIndex);
      setNotes([
        ...notes.slice(0, noteIndex),
        { id: Number(id), title: data.title, content: data.content },
        ...notes.slice(noteIndex + 1),
      ]);
    }

    // Go back to default route
    history.push('/');
  };

  const handleDelete = (e, id, history) => {
    setNotes(notes.filter((note) => note.id !== Number(id)));

    // Go back to default route
    history.push('/');
  };

  const handleToggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <main className="flex flex-col h-screen">
      <Router>
        <Nav theme={theme} handleToggleTheme={handleToggleTheme} />
        <Route
          path="/"
          component={() => <NoteList notes={notes} theme={theme} />}
        />
        <Route
          path={['/note/:id', '/note']}
          component={() => (
            <NoteModal
              notes={notes}
              handleSave={handleSave}
              handleDelete={handleDelete}
              theme={theme}
            />
          )}
        />
      </Router>
    </main>
  );
}
