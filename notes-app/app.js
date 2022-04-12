const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const validator  = require('validator')
//  const sum = add(4,-2)
// const msg = getNotes()
// console.log(msg)
//  console.log(validator.isURL('https/mead.io'))
// const greenMsg = chalk.blue.inverse.bold('Hurrah !')
// console.log(greenMsg)
// console.log(process.argv[2])
console.log(process.argv)
console.log(yargs.argv)
// const  command =  process.argv[2]
// if (command === 'add'){
// console.log('Adding note!')
// }else if(command === 'remove'){
//     console.log('Removing note!')
// }



//create add ,remove command

// yargs.command({
//     command : 'remove', 
//     describe : 'Remove a note',
//     handler : function(){
//         console.log('Removing anew note!')
//     }
// })

//create list

// yargs.command({
//     command : 'list',
//     describe :'List your notes',
//     handler: function(){
//         console.log('listing your notes')
//     }

// })
yargs.command({
    command : 'add',
    describe: "Adding a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);		
    }
})

yargs.parse();