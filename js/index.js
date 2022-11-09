
let backElement = document.getElementById("topdiv")
let is = 1
var lastScrollTop = 0;
var position=""

window.addEventListener('scroll', function (e) {

    // mesma posição
    if (e.scrollY === lastScrollTop) return;
    if(this.scrollY < lastScrollTop){
        position="up"
        is+=5
    }
    else{
        position="down"
        is+=-5
    }
    backElement.style.backgroundPositionX=is+"px"
    lastScrollTop = this.scrollY;

  }, true)


let midleDiv = document.getElementById("midleDiv")
midleDiv.addEventListener("mousemove",(e)=>{
        let x = e.clientX
        let y = e.clientY
        midleDiv.style.backgroundPositionX = x/7+"px"
        midleDiv.style.backgroundPositionY = y/7+"px"


       
})
//cursor{

// function marginMen(u,f){
//     if (f==0) {
//         backElement.style.backgroundPositionX = u+"px"
//     }
//     if (f==1) {
//         backElement.style.backgroundPositionY = u+"px"
//     }

// }
// function marginPlu(u,f){
//     if (f==0) {
//         backElement.style.backgroundPositionX = -u+"px"
//     }
//     if (f==1) {
//         backElement.style.backgroundPositionY = -u+"px"
//     }
// }
// function random() {
//     let i =  Math.floor(Math.random()*2)
//     if (i==0) {

//             let f =  Math.floor(Math.random()*2)
//             let u  = Math.floor(Math.random()*100)
//             marginMen(u,f)
  
//     }
//     if (i==1) {

//             let f =  Math.floor(Math.random()*2)
//             let u  = Math.floor(Math.random()*100)
//             marginPlu(u,f)

//     }
// }
// setInterval(()=>{
//     random()
// },500)



//language

