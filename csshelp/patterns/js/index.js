colors =  {
    back:"rgb(44 105 141)",
    front:"39,38,67",
    opacity:"0.5"
}
var utf = "data:image/svg+xml"
let objs = [
    {
        nome:"rects",
        data:
        function(){
            let dt = new Image()
            dt.src=`${utf},<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500"><rect x="32.629" y="37.195" width="190.838" height="190.838" style="fill: none; stroke-width: 34px; stroke: rgba(${colors.front} ,${colors.opacity});"/><rect x="51.526" y="220.155" width="56.992" height="56.992" style="fill: none; stroke-width: 34px; stroke:rgba(${colors.front} ,${colors.opacity});" transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 234.467606, 143.222061)"/><rect x="82.951" y="354.419" width="91.749" height="91.749" style="stroke-width: 34px; fill: rgba(${colors.front} ,${colors.opacity});" transform="matrix(0, 1, -1, 0, 776.7948, 252.378601)"/><rect x="174.683" y="24.329" width="125.233" height="124.821" style="stroke-width: 34px; fill: rgba(${colors.front} ,${colors.opacity});" transform="matrix(0.707107, -0.707107, 0.707107, 0.707107, 141.824875, 246.087555)"/></svg>
            
        `
        return dt
        }
    },
    { 
        nome:"bubbles",
        data:
        function(){
            let dt = new Image()
            dt.src=`${utf},<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500"><path style="stroke-width: 34px; fill: rgba(${colors.front} ,${colors.opacity});" d="M 414.2 42.494 L 414.201 42.495 C 439.786 65.825 441.614 105.48 418.283 131.065 L 418.282 131.065 C 394.951 156.65 355.297 158.478 329.712 135.147 L 329.711 135.146 C 304.126 111.815 302.299 72.161 325.63 46.576 L 325.63 46.575 C 348.961 20.99 388.615 19.163 414.2 42.494 Z M 325.505 59.367 C 310.218 85.844 319.853 121.776 346.33 137.062 C 346.33 137.062 310.414 102.463 338.678 63.779 C 359.675 35.044 401.499 41.075 401.499 41.075 C 375.023 25.789 340.791 32.891 325.505 59.367 Z M 161.907 363.971 C 179.823 381.886 179.823 410.932 161.907 428.848 C 143.992 446.762 114.946 446.762 97.031 428.847 C 79.116 410.932 79.116 381.887 97.031 363.971 C 114.946 346.056 143.992 346.055 161.907 363.971 Z M 97.007 375.666 C 86.171 394.435 93.001 419.905 111.77 430.741 C 111.77 430.741 86.309 406.214 106.345 378.793 C 121.229 358.423 150.877 362.699 150.877 362.699 C 132.109 351.863 107.843 356.898 97.007 375.666 Z M 395.155 247.345 C 434.768 247.345 466.881 279.458 466.881 319.071 C 466.88 358.684 434.768 390.796 395.155 390.796 C 355.542 390.796 323.431 358.684 323.43 319.071 C 323.43 279.458 355.542 247.345 395.155 247.345 Z M 343.058 286.353 C 326.114 315.701 336.795 355.53 366.143 372.474 C 366.143 372.474 326.331 334.122 357.661 291.244 C 380.935 259.39 427.296 266.076 427.296 266.076 C 397.948 249.132 360.002 257.005 343.058 286.353 Z M 168.631 39.268 L 168.632 39.268 C 226.091 39.268 272.67 85.847 272.67 143.306 L 272.67 143.307 C 272.67 200.766 226.091 247.345 168.632 247.345 L 168.631 247.345 C 111.172 247.345 64.593 200.766 64.593 143.307 L 64.593 143.306 C 64.593 85.847 111.172 39.268 168.631 39.268 Z M 89.636 93.249 C 65.477 135.092 80.707 191.88 122.55 216.039 C 122.55 216.039 65.787 161.357 110.457 100.221 C 143.64 54.806 209.74 64.34 209.74 64.34 C 167.896 40.181 113.794 51.405 89.636 93.249 Z" /></svg>
       
          `
        return dt
        }
    },
    { 
        nome:"fluid",
        data:
        function(){
            let dt = new Image()
            dt.src=`${utf},<svg xmlns="http://www.w3.org/2000/svg" viewBox="-66.685 39.386 500 500" width="500" height="500"><path style="fill: rgba(${colors.front} ,${colors.opacity});" d="M 398.651 39.386 L 433.315 39.386 L 433.315 74.05 L 379.714 92.987 Z M 433.315 504.721 L 433.315 539.385 L 398.651 539.385 L 379.714 485.784 Z M -32.022 539.386 L -66.686 539.386 L -66.686 504.722 L -13.085 485.785 Z M -66.685 74.05 L -66.685 39.386 L -32.021 39.386 L -13.084 92.987 Z M -66.686 309.077 L -66.686 269.695 L 38.769 239.133 L 120.147 269.098 L 89.159 195.229 L 163.026 226.216 L 133.062 144.84 L 163.624 39.386 L 203.006 39.386 L 233.568 144.84 L 203.604 226.217 L 277.472 195.229 L 246.484 269.097 L 327.861 239.133 L 433.315 269.695 L 433.315 309.077 L 327.861 339.639 L 246.485 309.675 L 277.472 383.542 L 203.604 352.554 L 233.568 433.931 L 203.006 539.385 L 163.624 539.385 L 133.062 433.931 L 163.026 352.555 L 89.159 383.542 L 120.147 309.674 L 38.769 339.639 Z" /></svg>
        `
        return dt
        }
    },
    { 
        nome:"arabic tile",
        data:
        function(){
            let dt = new Image()
            dt.src=`${utf},<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500"><g><path  style="fill:rgba(${colors.front} ,${colors.opacity});" d="M 250.761 291.067 L 215.366 326.462 L 249.563 360.659 L 249.489 360.733 L 250 361.244 L 250.511 360.733 L 250.437 360.659 L 285.395 325.701 Z M 22.286 250 L 81.033 191.254 L 29.12 139.342 L 139.342 29.12 L 191.634 81.413 L 250.761 22.286 L 309.127 80.652 L 360.659 29.12 L 470.88 139.342 L 418.968 191.254 L 477.714 250 L 418.967 308.746 L 470.88 360.659 L 360.659 470.88 L 309.126 419.348 L 250.761 477.714 L 191.634 418.588 L 139.342 470.88 L 29.12 360.659 L 81.033 308.746 Z M 208.933 250 L 173.919 214.986 L 139.342 249.563 L 139.268 249.489 L 138.756 250 L 139.268 250.512 L 139.342 250.437 L 173.919 285.015 Z M 291.067 250 L 326.082 285.015 L 360.659 250.437 L 360.733 250.511 L 361.244 250 L 360.733 249.489 L 360.659 249.563 L 326.082 214.986 Z M 250 138.756 L 249.489 139.268 L 249.563 139.342 L 215.366 173.539 L 250.761 208.933 L 285.395 174.299 L 250.437 139.342 L 250.511 139.267 Z M 259.955 250 L 310.526 199.43 L 300.951 189.855 L 250.761 240.045 L 199.81 189.095 L 189.475 199.43 L 240.045 250 L 189.475 300.571 L 199.81 310.906 L 250.761 259.955 L 300.951 310.145 L 310.525 300.571 Z M 250 107.644 L 266.068 123.712 L 293.571 96.208 L 250.761 53.398 L 207.19 96.969 L 233.933 123.711 Z M 392.356 250 L 376.289 266.067 L 403.412 293.19 L 446.602 250 L 403.412 206.81 L 376.289 233.933 Z M 107.644 250 L 123.711 233.933 L 96.589 206.81 L 53.398 250 L 96.589 293.19 L 123.711 266.068 Z M 250.761 446.602 L 293.57 403.792 L 266.067 376.289 L 250 392.356 L 233.933 376.289 L 207.191 403.031 Z M -402.562 -18.893 L -398.386 -18.893 L -398.386 0 L -402.562 0 Z"/></g></svg>
        `
        return dt
        }
    }
]
aplly()
document.getElementById("front").value = "#272643"
document.getElementById("back").value = "#2c698d"
// color  input
function convertColor(color) {
    /* Check for # infront of the value, if it's there, strip it */
    if(color.substring(0,1) == '#') {
       color = color.substring(1);
     }
    var rgbColor = {};
    /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
    rgbColor.r = parseInt(color.substring(0,2),16);
    rgbColor.g = parseInt(color.substring(2,4),16);
    rgbColor.b = parseInt(color.substring(4),16);
    return rgbColor;
}
function colorChange(color,inst){
    if(inst=="front"){
        let msx = convertColor(color)
        let colory = `${msx.r},${msx.g},${msx.b}`
        document.getElementById("fc").style.backgroundColor = `rgba(${msx.r},${msx.g},${msx.b},${colors.opacity})`  
        colors.front = colory
        aplly()
    }
    if(inst=="back"){
        let msx = convertColor(color)
        let colory = `rgb(${msx.r},${msx.g},${msx.b})`
        document.getElementById("bc").style.background=colory
        colors.back = colory
        aplly()
    }
}
function opacityChange(value){  
    colors.opacity=value
    document.getElementById("fc").style.background = `rgba(${colors.front},${colors.opacity})`
    aplly()
}
// aplica styles
function aplly() {
    document.getElementById("display2")
    .innerHTML=""
    objs.forEach(function(item,index){
        document.getElementById("display2")
        .innerHTML+=`
            <div class="bc">
                <div class="view" id="view${index}"  style="background-color:${colors.back}; background-image:url(&quot;${item.data().src.replace(/"/gi,"'")}&quot;);"></div>
                <div class="infos"> 
                <div class="name">${item.nome}</div>
                <button class = "copy">get</button>
                </div>   
               
            </div>
    `
    createEvent()
})
}
//copiando style
function createEvent(){
   let btts = document.getElementsByClassName("copy")
   for (let index = 0; index < btts.length; index++) {
    const element = btts[index];
    element.addEventListener("click",()=>{
    let styles =  document.getElementsByClassName("view")[index].style
    document.getElementById("texto").value=`background:${styles.backgroundColor};

background-image: ${styles.backgroundImage};
    `
    document.getElementById("msg").innerHTML=objs[index].nome
    showppp()
    })
   }
}
function showppp(){
    document.getElementById("popup").style.transform="scale(1)"
}
document.getElementById("close").addEventListener("click",function(){
    document.getElementById("popup").style.transform="scale(0)"
}) 
document.getElementById("cokk").addEventListener("click",()=>{
    document.getElementById("texto").select()
    document.execCommand('copy')
    document.getElementById("cokk").innerHTML="copied :)"
    document.getElementById("cokk").style.transform="scale(0.90)"
    setTimeout(()=>{
        document.getElementById("cokk").innerHTML="copy"
        document.getElementById("cokk").style.transform="scale(1)"
        window.getSelection().removeAllRanges();
    },1000)
})