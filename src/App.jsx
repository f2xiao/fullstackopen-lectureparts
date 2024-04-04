import { useEffect, useState } from "react";
import Note from "./components/Note";
import noteServices from "./services/notes";

function App() {
  const [newNotes, setNewNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note");

  // console.log(noteServices);

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await noteServices.getAll();
      // console.log(notes);

      setNewNotes(notes);
    };

    fetchNotes();
  }, []);

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();

    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteServices
      .create(noteObj)
      .then((returnedNote) => {
        setNewNotes(newNotes.concat(returnedNote));
        setNewNote("");
      })
      .catch((error) => {
        console.log(error);
      });
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
        <button type="submit">add</button>
      </form>
    </>
  );
}

export default App;
