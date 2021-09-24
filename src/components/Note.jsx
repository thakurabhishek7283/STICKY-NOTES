import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.delete(props.id);
  }
  return (
    <div className="displayBox" id={props.id}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleClick}
      >
        Delete
      </Button>
    </div>
  );
}

export default Note;
