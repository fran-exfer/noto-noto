import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: '224',
      title: 'Test note #0',
      content: 'This is a short note.',
    },
    {
      id: '1234',
      title: 'Test note #1',
      content:
        "This is a longer note, but it's still a short-ish one. Test testing testus tested. We're testing our note. We're definitely testing our note here.",
    },
    {
      id: '3443',
      title: 'Test note #2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex eum quis molestiae dolores, minima ipsum sint voluptatibus eos odio sunt quae possimus quasi itaque inventore saepe, voluptatum dolorum consequatur hic? Ex eum quis molestiae dolores, minima ipsum sint voluptatibus eos odio sunt.',
    },
  ]);

  return (
    <main className="flex flex-col h-screen">
      <Router>
        <Nav />
        <Route path="/" component={() => <NoteList notes={notes} />} />
        <Route path="/note" component={NoteModal} />
      </Router>
    </main>
  );
}
