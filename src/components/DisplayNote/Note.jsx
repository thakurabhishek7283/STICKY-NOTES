import "./Note.css";
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
    <div className="note-container">
      <div className="note-edit-btn">
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
      </div>
      <div className="note ">
        <h2 id="note-title">
          <em>{props.title}</em>
        </h2>
        <p id="note-content">{props.content}</p>
      </div>
      <div className="note-del-btn">
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Note;
