// let fs = require('fs')

// // we add a newline character to the command line argument
// fs.appendFile('log.md', process.argv[2] + '\n', function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('Commit logged!')
//   }
// })





let inquirer = require('inquirer')
let fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },

    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?'
    },
    
  ])
  .then(function (data) {
    let filename =
      data.name
        .toLowerCase()
        .split(' ')
        .join('') + '.json'

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
      if (err) {
        return console.log(err)
      }

      console.log('Success!')
    })

    fs.appendFile('log.md', data.description + '\n'+ '\n'+ '\n', function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Commit logged!')
      }
    })
    fs.appendFile('log.md', "# " + data.title + '\n', function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Commit logged!')
      }
    })
    fs.appendFile('log.md', "* Installation " + '\n', function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Commit logged!')
      }
    })
    fs.appendFile('log.md', "* Usage " + '\n', function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Commit logged!')
      }
    })
    fs.appendFile('log.md', "* Credits" + '\n', function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Commit logged!')
      }
    })
    fs.appendFile('log.md', "* License" + '\n', function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Commit logged!')
      }
    })
    
  })
