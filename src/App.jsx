import "./styles.css";
import React, { useState } from "react";
import CreateNote from "./components/CreateNewNote/CreateNote";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Note from "./components/DisplayNote/Note";
import EditNote from "./components/EditExistingNote/EditForm";

function App() {
  const [noteArr, expandArr] = useState([]);

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
    addNote(note);
    deleteNote(id);
  }

  function editNote(id) {
    const note = noteArr.find((note, index) => {
      return id === index;
    });
    return (
      <EditNote id={id} note={note} handleEditControl={handleEditControl} />
    );
  }

  return (
    <div className="App">
      <Header />
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
