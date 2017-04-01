function App() {}

App.prototype.init = function(){
  Framework.init()

  this.setupClicks()
}

App.prototype.setupClicks = function() {
  $(document).on('click', '#collapse_gear', (e) => {
    collapseGear()
  })

  $(document).on('touchend', '#collapse_gear', (e) => {
    collapseGear()
  })

  $(document).on('click', '#collapse_dung', (e) => {
    collapseDung()
  })

  $(document).on('touchend', '#collapse_dung', (e) => {
    collapseDung()
  })

  $(document).on('click', '#collapse_wcl', (e) => {
    collapseWcl()
  })

  $(document).on('touchend', '#collapse_wcl', (e) => {
    collapseWcl()
  })
}

function collapseGear() {
  if($('#collapse_gear').text() == '-') {
    $('#gear_container').css('display','none')
    $('#collapse_gear').text('+')
    $('#collapse_gear').css('font-size','12px')
  } else {
    $('#gear_container').css('display','block')
    $('#collapse_gear').text('-')
    $('#collapse_gear').css('font-size','20px')
  }
}

function collapseDung() {
  if($('#collapse_dung').text() == '-') {
    $('#dung_container').css('display','none')
    $('#collapse_dung').text('+')
    $('#collapse_dung').css('font-size','12px')
  } else {
    $('#dung_container').css('display','block')
    $('#collapse_dung').text('-')
    $('#collapse_dung').css('font-size','20px')
  }
}

function collapseWcl() {
  if($('#collapse_wcl').text() == '-') {
    $('#wcl_container').css('display','none')
    $('#collapse_wcl').text('+')
    $('#collapse_wcl').css('font-size','12px')
  } else {
    $('#wcl_container').css('display','block')
    $('#collapse_wcl').text('-')
    $('#collapse_wcl').css('font-size','20px')
  }
}

global.App = module.exports = App