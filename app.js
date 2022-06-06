const getNotes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('process')
const fs = require('fs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        fs.writeFileSync('Notes',JSON.stringify(argv))
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log("Remove a note")
    }
})

yargs.command({
    command: 'list',
    describe: 'List down all the notes',
    handler: ()=> {
        console.log("List down all the notes")
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => {
        console.log("Read a note")
    }
})

yargs.parse()
// console.log(yargs.argv)
