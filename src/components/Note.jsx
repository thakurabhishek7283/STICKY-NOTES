import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
function Note(props) {
  function handleDelete() {
    props.delete(props.id);
  }
  function handleEdit() {
    props.edit(props.id);
  }
  return (
    <div className="displayBox" id={props.id}>
      <div className="edit-btn">
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </div>
      <div className="note ">
        <h2 id="note-title">
          <em>{props.title}</em>
        </h2>
        <p>{props.content}</p>
      </div>
      <div className="del-btn">
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Note;
