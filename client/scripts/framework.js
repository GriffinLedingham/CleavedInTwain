var Framework = function(){
  this.initTemplates = function(){
    $.ajax({
      url: 'templates/template.html',
      type: 'GET',
      async: false,
      complete: (response) => {
        $('#templates').append(response.responseText)
      }
    })
  }

  this.loadTemplate = function(key, vars){
    if(typeof vars == 'undefined') { vars = {} }
    var temp = Handlebars.compile($('#'+key).html())
    return temp(vars)
  }

  this.init = function(){

  }

  this.isMobile = function(){
    return (typeof Cordova != 'undefined')
  }
}

global.Framework = module.exports = new Framework()