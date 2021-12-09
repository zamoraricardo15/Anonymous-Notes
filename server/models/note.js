const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({

    post: {type: String, required: true, minlength: 3, default: ""},
    
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
