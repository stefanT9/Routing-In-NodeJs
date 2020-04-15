const fs = require('fs')

let indexHTML = ''///codul html in string
let indexCSS = '' ///codul css in string
let indexJS = ''  ///codul js in string

function exempleAPI(req,res)
{
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(JSON.stringify({ success: true, message: 'example ran successfully' }))
}
function getIndexHTML (req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(indexHTML)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}
function getIndexCSS (req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/css')
    res.write(indexCSS)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/css')
    res.write('Internal server error')
  }
}
function getNavbarCSS (req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/css')
    res.write(navBarCSS)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/css')
    res.write('Internal server error')
  }
}
function getIndexJS (req, res) {
  try {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/javascript')
    res.write(indexJS)
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.write('Internal server error')
  }
}

module.exports = { getIndexHTML, getIndexCSS, getIndexJS, exempleAPI}

