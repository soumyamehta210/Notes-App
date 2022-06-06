const {listNotes, addNotes, removeNotes, readNotes} = require('./notes')
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
    handler(argv) {
        addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List down all the notes',
    handler() {
        listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)
