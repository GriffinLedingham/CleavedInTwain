/**
* Root Express Route
* This is where the app will hit at its root
**/
var express = require('express')
var fs = require('fs')
var path = require('path');
var whacko = require('cheerio')
var _             = require('lodash')

module.exports = function () {
  var routes = express.Router()

  routes.get('/',(req,res) => {
    fs.readFile('server/views/roster.html', 'utf8',(err, fileData)=>{
      var $ = whacko.load(fileData)

      cache_Helper.setCacheScripts($)

      fs.readFile('www/templates/template.html', 'utf8',(err, temps)=>{
        $('#templates').html(temps)
        $('#app').append(template_Helper.loadTemplate('headerTemplate', {title:'roster', page:'roster'}))
        $('#app').append(template_Helper.loadTemplate('rosterTemplate', {players:roster_Helper.getRosterPlayerList}))

        res.send($.html())
        res.end()
        $ = null
      })
    })
  })

  return routes
}