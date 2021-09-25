import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function EditForm(props) {
  const [note, setNote] = useState(props.note);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick() {
    props.handleEditControl(note, props.id);
  }

  return (
    <div className="edit-note-form">
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          type="text"
          name="note.title"
        />
        <textarea
          value={note.content}
          onChange={handleChange}
          name="note.content"
          cols="30"
          rows="10"
        />
        <Fab color="secondary" aria-label="add" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default EditForm;
