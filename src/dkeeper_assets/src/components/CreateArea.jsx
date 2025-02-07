import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",  // Changed from note to content
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,  // Simplified since property names now match
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      content: "",  // Changed from note to content
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"  // Changed from content to match state property
          placeholder="Take a note..."
          rows="3"
          value={note.content}  // Changed from note.note to note.content
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
