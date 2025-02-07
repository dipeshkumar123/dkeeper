import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(note) {
    setNotes((prevNotes) => {
      dkeeper.createNote(note.title, note.content);
      return [note, ...prevNotes];
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await dkeeper.readNotes();
    setNotes(notesArray);
  }

  function deleteItem(id) {
    dkeeper.removeNote(id);
    setNotes((prevNotes) => prevNotes.filter((item, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
