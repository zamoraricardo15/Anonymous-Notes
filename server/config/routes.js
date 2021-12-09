const note = require("../controllers/notes.js");

module.exports = function(app){

    app.get("/notes", (req, res)=> {

        console.log('in notes')
        note.index (req, res);
        
        })

    app.post("/notes", (req, res)=> {

        console.log('posting notes')
        note.create (req, res);
        
    })

};