// It should take two command line arguments:
// a URL
// a local file path
// It should download the resource at the URL to the local path 
// on your machine. Upon completion, it should print out a message like 
// Downloaded and saved 1235 bytes to ./index.html.
//1 character is equal to 1 byte

const request = require('request');
const fs = require('fs')
const args = process.argv.slice(2)

const url = args[0]

const filePath = args[1]

request(url, (error, response, body) => {

  console.log('body:', body); // Print the HTML for the given page
   if (error) {
      console.error(error)
      return
    }
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to index.html`)
    
  })
  

});

