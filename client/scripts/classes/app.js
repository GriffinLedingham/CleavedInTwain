function App() {}

App.prototype.init = function(){
  Framework.init()

  this.setupClicks()
}

App.prototype.setupClicks = function() {
  $(document).on('click', '#collapse_gear', (e) => {
    if($('#collapse_gear').text() == '-') {
      $('#gear_container').css('display','none')
      $('#collapse_gear').text('+')
      $('#collapse_gear').css('font-size','12px')

    } else {
      $('#gear_container').css('display','block')
      $('#collapse_gear').text('-')
      $('#collapse_gear').css('font-size','20px')
    }
  })
}

global.App = module.exports = App