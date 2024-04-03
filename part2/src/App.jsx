import { useState } from "react";
import Note from "./components/Note";
function App({ notes }) {
  const [newNotes, setNewNotes] = useState(notes);

  const [newNote, setNewNote] = useState("a new note");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    setNewNotes(
      newNotes.concat({
        id: newNotes.length + 1,
        content: newNote,
        important: Math.random() < 0.5,
      })
    );
  };

  return (
    <>
      <ul>
        {newNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
}

export default App;
