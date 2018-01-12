console.log("Starting app.");

const fs = require("fs"); //load node api
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");  //load notes.js file in folder

const titleOptions = {
  describe: "Title of note",  //description of title
  demand: true, //required
  alias: "t"  //change syntax
}

const bodyOptions = {
  describe: "Body of the note",
  demand: true,
  alias: "b"
}

const argv = yargs.command("add","Add a new note", {
  title: titleOptions,
  body: bodyOptions
})
.command("list","List all notes")
.command("read", "Read a note",{
  title: titleOptions
})
.command("remove", "Remove a note", {
  title: titleOptions
})
.help()
.argv;

// console.log("Yargs" , argv);
// console.log(process.argv)
var command = argv._[0]
// var command = process.argv[2];
console.log("Command: " , command);

if (command === "add"){
  var note = notes.addNote(argv.title, argv.body)
  if(note){
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");

  }
} else if (command === "list"){
  var allNote = notes.getAll();
  console.log(`Printing ${allNote.length} note(s).`);
  allNote.forEach((note) => {
    notes.logNote(note);
  })

} else if (command === "read"){
  var foundNote = notes.getNote(argv.title)
  var message = foundNote ? `Message Found ${foundNote[0].body}` : "Message Not Found";
  notes.logNote(foundNote[0]);
  console.log(message);

} else if (command === "remove"){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);

} else {
  console.log("Command not recognized");
}
