var temaInfo = localStorage.getItem("tema")






var kick = new Audio()
var clap = new Audio()
var percussao = new Audio()
var hat = new Audio()
var cymbal = new Audio()
var loopkick = new Audio()
var loophat = new Audio()
var vocal1 = new Audio()
var vocal2 = new Audio()
var hihat = new Audio()


function def(m){

    kick.src = m.kick
    clap.src = m.clap
    percussao.src = m.perc
    hat.src = m.hat
    cymbal.src = m.cymb
    loopkick.src = m.lk
    loophat.src = m.lh
    vocal1.src = m.voc1
    vocal2.src = m.voc2
    hihat.src = m.hat

}
//a variavel abaixo define o tipo de evento que sera didparado caso seja um mobile o event

//////////////////////////////////////////////////////////////////////


function mudatema(){
  document.getElementById("esconder").style.transform = 'scaleX(1)'
  document.getElementById("tema").style.width = '154px'
  document.getElementById("tema").style.borderRadius=" 9px 9px 0 0"
  

 
}

//////////////////////////////////////////////////////////////////////
displayType=""

function carregar(){
 
  document.getElementById("popup").style.transform ='sacale(1)'
  if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    document.getElementById('popup').style.display="block"
    document.getElementById("image1").style.display = "none"
    document.getElementById("image1").style.transform = "scale(0)"
    document.getElementById("image2").style.display="block"
    document.getElementById('popup').style.width="300px"
    document.getElementById('popup').style.fontSize="16px"
    
    document.getElementById("popupmensage").innerHTML = "olá seja bem vindo ,faça um som maneiro"
   

  }else{
   
    document.getElementById('popup').style.display="block"
  }
  
}



function clickok(){
   var okc = document.getElementById("popup")
   var anm = okc.animate([
  {transform:'scale(1.2)'}
], 50);
  anm.addEventListener('finish', function() {
  
});
  document.getElementById("popup").style.visibility = 'hidden'
   document.getElementById("blur").style.display="none"
  initTheme()
}













//variaveis do player de musica a player é do local da musica



//volume inicial
kick.volume = 0.1
clap.volume = 0.1
percussao.volume = 0.1
hat.volume = 0.1
cymbal.volume = 0.1
loopkick.volume = 0.1
loophat.volume = 0.1
vocal1.volume = 0.1
vocal2.volume = 0.1
hihat.volume= 0.1
var vol = 0.1







var statu = 0
document.getElementById('switch-shadow').addEventListener('click',()=>{
  if(statu==0){
    statu=1}
    else{statu=0}

})







var velocity = document.getElementById('hihat').value
//velocity barra
document.getElementById("hihat").addEventListener("input",function barradevolume(){
    velocity =  document.getElementById('hihat').value
    
  }
)













var timing = 40

   

function loop() {

  
  if(statu==1){
  hihat.volume=vol 
  hihat.play();
  hihat.currentTime = 0
  }
  window.setTimeout(loop,(60*1000)/timing);
  

}



document.querySelector('#hihat').addEventListener('input', function (e) {
  timing = parseInt(this.value);
  document.querySelector("#bpm").innerHTML=timing+" bpm"
});

loop();









////////////////////



//////////////////////
var vol= document.getElementById('volume').value
//volume barra
document.getElementById("volume").addEventListener("input",function barradevolume(){
    vol =  document.getElementById('volume').value
    kick.volume = vol
    clap.volume = vol
    percussao.volume = vol
    hat.volume = vol
    cymbal.volume = vol
    loopkick.volume = vol
    loophat.volume = vol
    vocal1.volume = vol
    vocal2.volume = vol
  }
)


document.addEventListener( "keydown",function(event){

  if(event.keyCode==187&&vol<0.2){
    vol=parseFloat(vol)
    vol+=0.01 
    document.getElementById('volume').value=vol
 

  }

else if(event.keyCode==189&&vol>0.01){
   vol-=0.01
         document.getElementById('volume').value=vol
kic }
  k.volume = vol
  clap.volume = vol
  percussao.volume = vol
  hat.volume = vol
  cymbal.volume = vol
  loopkick.volume = vol
  loophat.volume = vol
  vocal1.volume = vol
  vocal2.volume = vol

})
//////////////////////////////////////
//configurando volume de entreda
//tempo de animacao{
  var time = 70


 //inicio do player de musica  role pra baixo para ver o fim 
function tocar1() {
    kick.play();
    kick.currentTime = 0
    kick.volume=vol

   var play1 = document.getElementById("play1")
   var anm = play1.animate([
 // {transform: 'translate(5)'},
  {transform:'scale(1.2)'}
  ], time);
  anm.addEventListener('finish', function() {
  
});
 
/////////////////////////////////////////////////////////////////////////////////
}
function tocar2() {
    clap.play();
    clap.currentTime = 0
    clap.volume = vol
    

    var play2 = document.getElementById("play2")
    var anm = play2.animate([
  // {transform: 'translate(5)'},
   {transform:'scale(1.2)'}
 ], time);
   anm.addEventListener('finish', function() {
   
 });
 ////////////////////////////////////////////////////////////////////////////////
}
function tocar3() {
    percussao.play();
    percussao.currentTime = 0
    percussao.volume = vol


    var play3 = document.getElementById("play3")
    var anm = play3.animate([
  // {transform: 'translate(5)'},
   {transform:'scale(1.2)'}
 ], time);
   anm.addEventListener('finish', function() {
   
 });
//////////////////////////////////////////////////////////////////////////////////
}
function tocar4() {
    hat.play();
    hat.currentTime = 0
    hat.volume = vol
    
    var play4 = document.getElementById("play4")
    var anm = play4.animate([
//   {transform: 'translate(5)'},
   {transform:'scale(1.2)'}
 ], time);
   anm.addEventListener('finish', function() {
   
 });
 /////////////////////////////////////////////////////////////////////////////////
}
function tocar5() {
    cymbal.play();
    cymbal.currentTime = 0
    cymbal.volume = vol

    
    var play5 = document.getElementById("play5")
    var anm = play5.animate([
  // {transform: 'translate(5)'},
   {transform:'scale(1.2)'}
 ], time);
   anm.addEventListener('finish', function() {
   
 });
 ////////////////////////////////////////////////////////////////////////////////
}
function tocar6() {
    loopkick.play();
    loopkick.currentTime = 0
    loopkick.volume = vol
    
    var play6 = document.getElementById("play6")
    var anm = play6.animate([
  // {transform: 'translate(5)'},
   {transform:'scale(1.2)'}
 ], time);
   anm.addEventListener('finish', function() {
   
 });
}
function tocar7() {
    loophat.play();
    loophat.currentTime = 0
    loophat.volume = vol
    
    var play7 = document.getElementById("play7")
    var anm = play7.animate([
  // {transform: 'translate(5)'},
   {transform:'scale(1.2)'}
 ], time);
   anm.addEventListener('finish', function() {
 //////////////////////////////////////////////////////////////////////  
 });
}
function tocar8() {
    vocal1.play();
    vocal1.currentTime = 0
    vocal1.volume = vol
    
    var play8 = document.getElementById("play8")
    var anm = play8.animate([
  // {transform: 'translate(5)'},
   {transform:'scale(1.2)'}
 ], time);
   anm.addEventListener('finish', function() {
   
 });
}
function tocar9() {
    vocal2.play();
    vocal2.currentTime = 0
    vocal2.volume = vol
    
    var play9 = document.getElementById("play9")
    var anm = play9.animate([
   //{transform: 'translate(5px,4px)'},
   {transform:'scale(1.2)'}
 ], time);
   anm.addEventListener('finish', function() {
   
 });
}








//g3
document.addEventListener('keydown', function (event){ 
  if (event.keyCode == 97||event.keyCode ==35){ tocar7()}
  if (event.keyCode == 98||event.keyCode ==40){ tocar8()}
  if (event.keyCode == 99||event.keyCode ==34){ tocar9()}
  //g2
  if (event.keyCode == 100||event.keyCode ==37){ tocar4()}
  if (event.keyCode == 101||event.keyCode ==12){ tocar5()}
  if (event.keyCode == 102||event.keyCode ==39){ tocar6()}
  //g1
  if (event.keyCode == 103||event.keyCode ==36){ tocar1()}
  if (event.keyCode == 104||event.keyCode ==38){ tocar2()}
  if (event.keyCode == 105||event.keyCode ==33){ tocar3()}
 


})




//código usando DOM (JS Puro) tela de loading
document.addEventListener("DOMContentLoaded", function(event) { 
  var estilo = document.getElementsByClassName('load');
  estilo[0].style.visibility = "hidden";
});
////////////////////////////////////////////////////////////////////////

temacor  = document.getElementById("body1")

//tema claro
function tema(){
  temacor.style.background  = "#e3e3e3"
  document.getElementById("tema").style.color = "#e3e3e3"
  document.getElementById("temared").style.color ="#e3e3e3"
  document.getElementById("temaclaro").style.color = "#e3e3e3"
  document.getElementById("temaescuro").style.color = "#e3e3e3"
  document.getElementById("visor").style.color = "#e3e3e3"
  document.getElementById("copy").style.color = "rgb(132, 0, 0)"
  document.getElementById("cont").style.filter="saturate(100%)"
  document.getElementById("temaclaro").style.backgroundColor="rgb(148, 25, 25)"
  document.getElementById("temaescuro").style.backgroundColor="rgb(148, 25, 25)"
  document.getElementById("tema").style.backgroundColor="rgb(148, 25, 25)"
  document.getElementById("temared").style.backgroundColor="rgb(148, 25, 25)"
  document.getElementById("esconder").style.backgroundColor="rgb(148, 25, 25)"
  /////////////////////////////////////////////////////////////////////////
  document.getElementById("esconder").style.transform = "scaleX(0)"
  document.getElementById("tema").style.width = '100px'
  document.getElementById("tema").style.borderRadius=" 9px"
localStorage.setItem("tema","1")

}
//tema escuro
function tema2(){
  temacor.style.background  = "#1b1b1b"
  document.getElementById("tema").style.color = "#1b1b1b"
  document.getElementById("temared").style.color ="#1b1b1b"
  document.getElementById("temaclaro").style.color = "#1b1b1b"
  document.getElementById("temaescuro").style.color = "#1b1b1b"
  document.getElementById("visor").style.color = "#292929"
  document.getElementById("copy").style.color = "rgb(72, 72, 72)"
  document.getElementById("cont").style.filter="saturate(100%)"

  document.getElementById("temaclaro").style.backgroundColor="rgb(148, 25, 25)"
  document.getElementById("temaescuro").style.backgroundColor="rgb(148, 25, 25)"
  document.getElementById("temared").style.backgroundColor="rgb(148, 25, 25)"
  document.getElementById("tema").style.backgroundColor="rgb(148, 25, 25)"
  document.getElementById("esconder").style.backgroundColor="rgb(148, 25, 25)"
  /////////////////////////////////////////////////////////////////////////
  document.getElementById("esconder").style.transform = "scaleX(0)"
  document.getElementById("tema").style.width = '100px'
  document.getElementById("tema").style.borderRadius=" 9px"
localStorage.setItem("tema","2")

}
function temared(){

  temacor.style.background = "linear-gradient(159deg, rgba(18,18,18,1) 10%, rgba(43,43,43,1)80%)"
  temacor.style.backgroundAttachment="fixed"
  document.getElementById("tema").style.color = "#e3e3e3"
  document.getElementById("temared").style.color ="#e3e3e3"
  document.getElementById("temaclaro").style.color = "#e3e3e3"
  document.getElementById("temaescuro").style.color = "#e3e3e3"
  document.getElementById("visor").style.color = "#e3e3e3"
  document.getElementById("copy").style.color = "rgb(72, 72, 72)"
  document.getElementById("temared").style.backgroundColor="rgb(25, 25, 25)"
  document.getElementById("cont").style.filter="saturate(0%)"



  document.getElementById("temaclaro").style.backgroundColor="rgb(25, 25, 25)"
  document.getElementById("temaescuro").style.backgroundColor="rgb(25, 25, 25)"
  document.getElementById("tema").style.backgroundColor="rgb(25, 25, 25)"
  document.getElementById("esconder").style.backgroundColor="rgb(25, 25, 25)"
  /////////////////////////////////////////////////////////////////////////
  document.getElementById("esconder").style.transform = "scaleX(0)"
  document.getElementById("tema").style.width = '100px'
  document.getElementById("tema").style.borderRadius=" 9px"
localStorage.setItem("tema","3")
}





var btt=document.querySelectorAll(".btt");

  if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
   
    displayType ="moba"

  }else{
    displayType ="desk"
   
  }




if(displayType == "desk"){
  type("mousedown")
  
}

if(displayType == "moba"){
  type("touchstart")
}

function type(typez){

  btt.forEach(function(element) {


        element.addEventListener(typez, function(event){
       
      
        event.preventDefault()
        dffg(this.id)
      },false);


  })
}



 function dffg(gg){
  let id = gg
    switch(id){
        case "play1":
        tocar1()
        break;
        case "play2":
        tocar2()
        break;
        case "play3":
        tocar3()
        break;
        case "play4":
        tocar4()
        break;
        case "play5":
        tocar5()
        break;
        case "play6":
        tocar6()
        break;
        case "play7":
        tocar7()
        break;
        case "play8":
        tocar8()
        break;
        case "play9":
        tocar9()
        break;
      }
 }

  
  
  

function initTheme()
{
   switch(temaInfo)
    {
      case null:
      tema2()
        break;
      case "1":
      tema()
        break;
      case "2":
      tema2()
        break;
      case "3":
      temared()
        break;
    }
}
 

initTheme()
