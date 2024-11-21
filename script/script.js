// Объявление кнопки
let mybutton = document.getElementById("upBtn");

// Когда опускаемся на 20 пикселей вниз документа, появляется кнопка
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "none";
  }
}

// Когда жмем на кнопку, документ прокручивается вверх
function upFunction() 
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}