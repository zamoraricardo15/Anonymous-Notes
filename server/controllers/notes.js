const Note = require('../models/note.js');

module.exports = {

    index: function(req, res){

        Note.find({}).sort('-created_at')

            .then(notes => {
                console.log(notes)
                res.json(notes)

            })
            .catch(err =>{

                console.log("Error!", err);

                res.json(err)
        })
    },




    create: function(req, res){

        console.log('creating note')
        let note = new Note()
            note.post = req.body.post;
            
            note.save()
                .then(note => {
                    res.json(note)
                })
                .catch(err =>{
                    res.json(err)
        })
    }

}