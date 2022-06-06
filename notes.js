const fs = require('fs');

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

    const duplicateNotes = notes.filter((item) => {
        return item.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        console.log("Note added.")
    } else{
        console.log("Note title already exists!!!")
    }

    saveNotes(notes)
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((item) => item.title !== title)

    saveNotes(newNotes)
}

const getNotes = () => {
    return loadNotes();
}

module.exports = {getNotes: getNotes, addNotes: addNotes, removeNotes: removeNotes};