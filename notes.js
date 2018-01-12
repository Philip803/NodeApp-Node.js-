console.log("Starting notes.js");

const fs = require("fs");

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync("notes-data.json")
    return JSON.parse(notesString); //could be anything
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

var getAll = () => {
  return fetchNotes();
}

var getNote = (title) =>{
  var notes = fetchNotes();
  var foundNote = notes.filter((node) => node.title === title);
  return foundNote;
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title); //only save not same data
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
  // Break on this line and use repl to output note
  // Use read command with --title
  debugger;
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
