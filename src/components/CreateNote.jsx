import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    if (note.title && note.content) {
      props.addNote(note);
    }

    event.preventDefault();
    setNote({ title: "", content: "" });
  }
  const [isExpand, setExpand] = useState(false);
  function expand() {
    setExpand(!isExpand);
  }
  return (
    <form>
      <input
        onClick={expand}
        onChange={handleChange}
        name="title"
        value={note.title}
        type="text"
        placeholder="Title"
        required
      />
      {isExpand && (
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Note content"
          cols="30"
          rows="6"
          required
        />
      )}

      <Fab
        id="form-btn"
        color="secondary"
        aria-label="add"
        onClick={handleClick}
      >
        <AddIcon />
      </Fab>
    </form>
  );
}

export default CreateNote;
