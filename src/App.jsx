import "./styles.css";
import React, { useState } from "react";
import CreateNote from "./components/CreateNewNote/CreateNote";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Note from "./components/DisplayNote/Note";
import EditNote from "./components/EditExistingNote/EditForm";

function App() {
  const [noteArr, expandArr] = useState([]);
  const [noteId, setNoteId] = useState(null);
  const [note, setNote] = useState(null);
  const [active, setActive] = useState(false);
  function addNote(note) {
    expandArr((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    expandArr((prevValue) => {
      return noteArr.filter((arr, index) => {
        return index !== id;
      });
    });
  }

  function handleEditControl(note, id) {
    deleteNote(id);
    addNote(note);
    setActive(false);
  }

  function editNote(id) {
    const note = noteArr.find((note, index) => {
      return id === index;
    });
    setNoteId(id);
    setNote(note);
    setActive(true);
  }

  return (
    <div className="App">
      <Header />
      {active && (
        <EditNote
          id={noteId}
          note={note}
          handleEditControl={handleEditControl}
        />
      )}
      <CreateNote addNote={addNote} />
      <div className="box">
        {noteArr.map((arr, index) => {
          return (
            <Note
              key={index}
              title={arr.title}
              content={arr.content}
              id={index}
              delete={deleteNote}
              edit={editNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default App;
