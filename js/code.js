
$.ajax({    // modernste Version
  url: 'https://cat-fact.herokuapp.com/facts'
}).done( data => {
  console.log(data.text)


  let fact = data.text;

  $('.fact-box').innerText = fact

  

   

})