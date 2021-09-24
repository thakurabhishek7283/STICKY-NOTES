import "./styles.css";
import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

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

  return (
    <div className="App">
      <Header />
      <CreateNote addNote={addNote} />
      <div className="box">
        {noteArr.map((arr, index) => {
          return (
            <Note
              title={arr.title}
              content={arr.content}
              id={index}
              delete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default App;
