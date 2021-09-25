import "./styles.css";
import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

function App() {
  const [noteArr, expandArr] = useState([]);
  const [editedNote, editing] = useState({ title: "", content: "" });
  const [editCall, editCallfunc] = useState(false);
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
  function editNote(id) {
    const note = noteArr.find((arr, index) => {
      return index === id;
    });
    editing(note);
    deleteNote(id);
    editCallfunc((prevValue) => {
      if (!prevValue) return true;
      else return true;
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateNote
        addNote={addNote}
        editedNote={editedNote}
        empty={() => {
          return editing({ title: "", content: "" });
        }}
        editCall={editCall}
      />
      <div className="box">
        {noteArr.map((arr, index) => {
          return (
            <Note
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
