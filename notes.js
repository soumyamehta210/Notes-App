const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
    try{
        const data = JSON.parse(fs.readFileSync('notes.json').toString())
        return data
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((item) => item.title === title)

    if(duplicateNote){
        console.log(chalk.red("Note title already exists!!!"))
    } else{
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green("Note added."))
    }

    saveNotes(notes)
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((item) => item.title !== title);

    if(notes.length > newNotes.length){
        console.log(chalk.green("Note removed!"))
        saveNotes(newNotes);
    } else{
        console.log(chalk.red("No note found"))
    }
}

const listNotes = () => {
    console.log(chalk.blue("Your Notes:"));
    loadNotes().forEach(element => {
        console.log(element.title)
    });
}


const readNotes = (title) => {
    const note = loadNotes().find((item) => item.title === title)
    if(note) {
        console.log(chalk.blue(`Title: ${note.title}`))
        console.log(note.body)
    }
    else {
        console.log(chalk.red("Note not found!!!"))
    }
}


module.exports = {listNotes: listNotes, addNotes: addNotes, removeNotes: removeNotes, readNotes: readNotes};