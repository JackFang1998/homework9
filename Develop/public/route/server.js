var express = require("express");
var path = require("path");
// var fs=require("fs");

/////////////// creating a server port and listen it
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
////////////////

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
//////////////////
/// the http address direction   
/////this return to the main page index.html

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
    });
///this return to the second page, note.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../notes.html"));
    });
// app.get("/api/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "../../db/db.json"));
//     });
// app.post("/api/notes", function(req, res) {
//   fs.readFileSync("../../db/db.json",'utf8',function(err){
//       if (err)
//     {console.log(err)}
//     const note =JSON.parse(response);
//     const request=req.body;
//     const newNoteID = notes.length + 1;
//     const newNote = {
//       id:newNoteID,
//       title:request.title,
//       title:request.text
//     };
//     note.push(newNote);
//     res.json(newNote);
//     fs.writeFile(path.join(__dirname, "db.json"), JSON.stringify(notes, null, 2), function(err) {
//       if (err) throw err;
    
//           }
//         );
//         // add item set in the POST request to the notes array

//         // write the array back out to the file
//       })})
    