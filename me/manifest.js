
scrdireita = document.querySelector('#dir')

scrdireita.addEventListener("click",()=>{

    document.querySelector('#roda').scrollBy({ 
      // could be negative
        left: 390, 
        behavior: 'smooth' 
      });
})


scresquerda = document.querySelector('#esq')

scresquerda.addEventListener("click",()=>{

    document.querySelector('#roda').scrollBy({ 
      // could be negative
        left: -390, 
        behavior: 'smooth' 
      });
})


var div = document.getElementById("roda")
var anus= document.getElementsByClassName("btt")
if (div.scrollWidth > div.clientWidth) {
    anus[0].style.transform="scale(1)"
    anus[1].style.transform="scale(1)"
}else{
    anus[0].style.transform="scale(0)"
    anus[1].style.transform="scale(0)"

}
document.body.onresize = function() {
    div = document.getElementById("roda")
    anus= document.getElementsByClassName("btt")
  if (div.scrollWidth > div.clientWidth) {
    anus[0].style.transform="scale(1)"
    anus[1].style.transform="scale(1)"
  }else{
    anus[0].style.transform="scale(0)"
    anus[1].style.transform="scale(0)"
  }
 
}
var logo = document.getElementById("mlogo")

function load(){

  logo.style.display="block"
  var anm = logo.animate([
    {filter:"brightness(0%)"},
  {filter:"brightness(100%)"},    
{filter:"brightness(0%)"}
    ], 3000);

    anm.addEventListener('finish', function() {
    logo.style.display="none"
  
    });
  }






function carregar(){

  if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
  document.getElementsByClassName("btt")[0].style.display="none"
  document.getElementsByClassName("btt")[1].style.display="none"
  document.getElementById("cabe").style.marginTop="-10px"
  document.getElementsByClassName("p")[0].style.fontSize="15px"
  console.log(document.getElementsByClassName("p")[0])
  document.getElementById("roda").style.bottom="15px"
  document.getElementById("marg").style.bottom="5px"
  
  }
  
}