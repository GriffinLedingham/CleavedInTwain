const util = require('util')
const gsjson = require('google-spreadsheet-to-json')
const fs        = require('fs')
const jsonfile  = require('jsonfile')
const glob      = require("glob")
const path      = require('path')

module.exports = function () {
  var sheet_Helper = {}

  sheet_Helper.fetchSheet = function(cb) {
    sheet_Helper.isSheetOld((result) => {
      if(result) {
        console.log('Sheet is old, updating...')
        gsjson({
            spreadsheetId: '1ZYH0yGcfg1jidQrXsyKKFQ9wtpjzLeW9iu21BjZoGkg',
            worksheet: ['web_sheet']
        })
        .then(function(result) {
            console.log('Finished crawling!')
            jsonfile.writeFile('data.json', result, (err) => {
              console.log(err)
              console.log('Finished writing file!')
              sheet_Helper.sheetToMemory()
            })
        })
        .catch(function(err) {
            console.log(err.message)
            console.log(err.stack)
        })
      } else {
        console.log('Sheet is new, storing to memory...')
        sheet_Helper.sheetToMemory()
      }
    })
  }

  sheet_Helper.sheetToMemory = function() {
    jsonfile.readFile('data.json', function(err, obj) {
      if(err == null) {
        global.GuildData = obj
      }
    })
  }

  sheet_Helper.isSheetOld = function(cb) {
    fs.stat('data.json', (err, stats) => {
      if(typeof stats == 'undefined') {
        console.log('Sheet doesnt exist, crawling...')
        cb(true)
      } else {
        var mtime = new Date(util.inspect(stats.mtime)).getTime()/1000
        //Sheet is old if older than an hour
        cb( ((Math.floor(Date.now()/1000)) - mtime) > 3600 )
      }
    })
  }

  return sheet_Helper
}