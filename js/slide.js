$(document).ready(function(){

  $('#home')
    .hide()
    
  $('#home')
    .slideDown(1500)

  $('#item1')
    .click(function(){
      $('#home').slideUp("slow")
      $('#home').slideDown("slow")
  })

  $('#portifolio')
    .hide()


  $('#portifolio')
    .slideDown(1500)

  $('#item2')
    .click(function(){
      $('#portifolio').slideUp("slow")
      $('#portifolio').slideDown("slow")
  })
})