export default function NoteList() {
  return (
    <section className="note-list">
      <div className="note-list__controls">
        <button className="btn btn--primary">Add note</button>
      </div>
      <div className="note-list__notes"></div>
    </section>
  );
}
