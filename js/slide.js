$(document).ready(function(){

/*---------------------- HOME -----------------------*/
/*---------------------- SUMIDO -----------------------*/
  $('#home')
    .hide()
    
/*---------------------- APARECE -----------------------*/
  $('#home')
    .slideDown(1500)

/*---------------------- SE CLICAR NO MENU -----------------------*/
  $('#item1')
    .click(function(){
      $('#home').slideUp("slow")
      $('#home').slideDown("slow")
  })



/*---------------------- PORTFOLIO -----------------------*/
/*---------------------- SUMIDO -----------------------*/
  $('#portifolio')
    .hide()

/*---------------------- APARECE -----------------------*/
  $('#portifolio')
    .slideDown(1500)

// ---------------------- SE CLICAR NO MENU -----------------------
  $('#item2')
    .click(function(){
      $('#portifolio').slideUp("slow")
      $('#portifolio').slideDown("slow")
  })
})