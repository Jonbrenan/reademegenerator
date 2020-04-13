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

let table = "[Heading](#heading)"



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
    {
      type: 'input',
      name: 'Installation',
      message: 'Please describe how to install project?'
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

    fs.appendFile('log.md', "# " + data.title + '\n' + '\n' +  data.description + '\n' + '\n' + '* [installation](#installation)' + '\n' + '* Usage' + '\n' + '* Credits' + '\n' +'\n'+ "# Installation"  + '\n' + data.Installation + '\n' +'\n', function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Commit logged!')
      }
    })

    
    
  })






  // fs.appendFile('log.md', data.description + '\n', function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('Commit logged!')
  //   }
  // })
  
  // fs.appendFile('log.md', "* Installation " + '\n', function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('Commit logged!')
  //   }
  // })
  
  // fs.appendFile('log.md', "* Usage " + '\n', function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('Commit logged!')
  //   }
  // })

  // fs.appendFile('log.md', "* Credits" + '\n', function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('Commit logged!')
  //   }
  // })

  // fs.appendFile('log.md', "* License" + '\n' , function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('Commit logged!')
  //   }
  // })

  // fs.appendFile('log.md', "# Installation"  + '\n', function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('Commit logged!')
  //   }
  // })

  // fs.appendFile('log.md', data.Installation + '\n', function (err) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('Commit logged!')
  //   }
  // })
  
