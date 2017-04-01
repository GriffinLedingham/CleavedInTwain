/**
* u/ Express Route
* This is where user profiles will live
**/
var express = require('express')
var fs = require('fs')
var path = require('path');
var whacko = require('cheerio')
var _             = require('lodash')

module.exports = function () {
  var routes = express.Router()

  routes.get('/:name',(req,res) => {
    fs.readFile('server/views/user.html', 'utf8',(err, fileData)=>{
      var $ = whacko.load(fileData)

      cache_Helper.setCacheScripts($)

      fs.readFile('www/templates/template.html', 'utf8',(err, temps)=>{
        $('#templates').html(temps)
        $('#app').append(template_Helper.loadTemplate('headerTemplate', {title:'roster'}))
        $('#app').append(template_Helper.loadTemplate('profileTemplate', roster_Helper.getRosterPlayerIndiv(req.params.name)))

        res.send($.html())
        res.end()
        $ = null
      })
    })
  })

  return routes
}