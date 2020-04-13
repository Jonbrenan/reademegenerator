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
let axios = require('axios')

let genLicense = "This is a generic license"
let userName = 



inquirer
  .prompt([
    {
      type: 'input',
      name: 'userName',
      message: 'What is your github username?'
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
    {
      type: 'input',
      name: 'Usage',
      message: 'Please add usage content'
    },
    
    {
      type: 'list',
      message: 'What license would you like to use?',
      name: 'thelicense',
      choices: ['Licensed under the [MIT](LICENSE.txt) license', 'License prefered by the Community', 'Licensed under GNU GPLv3']
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Please add any content regarding contribution'
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Please add any content regarding tests'
    },
    
    
    
  ])
  


  .then(function (data) {
    let filename =
      data.userName
        .toLowerCase()
        .split(' ')
        .join('') + '.json'

        axios.get("https://api.github.com/users/" + data.userName)
        .then(function (response){
          console.log(response.data)
           avatar = response.data.avatar_url
           email = response.data.email
        

        

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
      if (err) {
        return console.log(err)
      }

      console.log('Success!')
    })

   

    fs.appendFile('log.md', "# " + data.title + '\n' + '\n' +  data.description + '\n' + '\n' + '* [installation](#installation)' + '\n' + '* [usage](#usage)' + '\n' + '* [license](#license)'+ '\n' + '* [contributing](#contributing)' + '\n' +  '* [tests](#tests)' + '\n' + "# Installation"  + '\n' + data.Installation + '\n' +'\n' + "# Usage" + '\n' + data.Usage + '\n' + '\n' + "# License" + '\n' + data.thelicense + '\n '+ '\n' + "# Contributing" + '\n' + data.Contributing + '\n' + '\n' + "# tests" + '\n' + data.Tests + '\n' + '\n' + `![image](${avatar})`+ '\n' + '\n' + email, function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Commit logged!')
      }
    })

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
  
