import "./CreateNote.css";
import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateNote(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    if (!isExpand) setExpand(true);
  }

  function handleClick(event) {
    if (note.title && note.content) {
      props.addNote(note);
      setExpand(!isExpand);
    }

    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  function expand() {
    setExpand(!isExpand);
  }
  return (
    <div className="create-note-form-box">
      <form>
        <div className="create-note-form-input">
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
        </div>

        <div className="create-note-form-btn">
          <Fab color="secondary" aria-label="add" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
