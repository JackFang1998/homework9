var express = require("express");
var path = require("path");
var fs = require("fs");

/////////////// creating a server port and listen it
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
////////////////

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
//////////////////
/// the http address direction
/////this return to the main page index.html

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
///this return to the second page, note.html
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});
app.post("/api/notes", function(req, res) {
  const db = JSON.parse(
    fs.readFileSync("./db/db.json", "utf8", function(err) {
      if (err) {
        throw err;
      }

      // add item set in the POST request to the notes array

      // write the array back out to the file
    })
  );
  const request = req.body;
  const newNoteID = db.length + 1;
  const newNote = {
    id: newNoteID,
    title: request.title,
    text: request.text
  };
  console.log(newNote);
  db.push(newNote);
  fs.writeFile(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(db),
    function(err) {
      if (err) throw err;
    }
  );
  res.send("success");
});
