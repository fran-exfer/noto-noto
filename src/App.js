import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: 224,
      title: 'Test note #0',
      content: 'This is a short note.',
    },
    {
      id: 1234,
      title: 'Test note #1',
      content:
        "This is a longer note, but it's still a short-ish one. Test testing testus tested. We're testing our note. We're definitely testing our note here.",
    },
    {
      id: 3442,
      title: 'Test note #2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eum quis molestiae dolores, minima ipsum sint voluptatibus eos odio sunt quae possimus quasi itaque inventore saepe, voluptatum dolorum consequatur hic? Ex eum quis molestiae dolores, minima ipsum sint voluptatibus eos odio sunt.',
    },
  ]);

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

  return (
    <main className="flex flex-col h-screen">
      <Router>
        <Nav />
        <Route path="/" component={() => <NoteList notes={notes} />} />
        <Route
          path={['/note/:id', '/note']}
          component={() => <NoteModal notes={notes} handleSave={handleSave} />}
        />
      </Router>
    </main>
  );
}
