let blockVar = document.getElementById("block")
let textVar = document.getElementById("text")


let b1  = 3
let b2  = 3
let c1  = 3
let c2  = 3


function change(value,inst){
    switch (inst) {
        case "all":
            all(value)
            break;

        case "lt":
            lt(value)
            break;

        case "rt":
            rt(value)
            break;

        case "lb":
            lb(value)
            break;
        
        case "rb":
            rb(value)
            break;

        


    }
}
function all(value){
    blockVar.style.borderRadius=`${value}px`
    bconfig = blockVar.style.borderRadius
    textVar.value =`border-radius:${bconfig};
-webkit-border-radius: ${bconfig};
    ` 
    document.getElementById("allValue").innerHTML = value+"px"
    b1  = value
    b2  = value
    c1  = value
    c2  = value
    document.getElementById("ltValue").innerHTML = value+"px"
    document.getElementById("lbValue").innerHTML = value+"px"
    document.getElementById("rtValue").innerHTML = value+"px"
    document.getElementById("rbValue").innerHTML = value+"px"
    document.getElementById("g1").value = value
    document.getElementById("g2").value = value
    document.getElementById("g3").value = value
    document.getElementById("g4").value = value
}   


function lt(value){
    b1 = value
    blockVar.style.borderRadius=`${b1}px ${b2}px ${c1}px ${c2}px`
    bconfig = blockVar.style.borderRadius
    textVar.value =`border-radius:${bconfig};
-webkit-border-radius: ${bconfig};
    ` 
    document.getElementById("ltValue").innerHTML = value+"px"
}
function rt(value){
    b2 = value
    blockVar.style.borderRadius=`${b1}px ${b2}px ${c1}px ${c2}px`
    bconfig = blockVar.style.borderRadius
    textVar.value =`border-radius:${bconfig};
-webkit-border-radius: ${bconfig};
    ` 
    document.getElementById("rtValue").innerHTML = value+"px"
}
function lb(value){
    c1 = value
    blockVar.style.borderRadius=`${b1}px ${b2}px ${c1}px ${c2}px`
    bconfig = blockVar.style.borderRadius
    textVar.value =`border-radius:${bconfig};
-webkit-border-radius: ${bconfig};
    ` 
    document.getElementById("lbValue").innerHTML = value+"px"
}
function rb(value){
    c2 = value
    blockVar.style.borderRadius=`${b1}px ${b2}px ${c1}px ${c2}px`
    bconfig = blockVar.style.borderRadius
    textVar.value =`border-radius:${bconfig};
-webkit-border-radius: ${bconfig};
    ` 
    document.getElementById("rbValue").innerHTML = value+"px"
}
function copy(self){
    textVar.select()
    document.execCommand('copy')
    self.innerHTML="copied"
    setTimeout(()=>{self.innerHTML="copy" 
    window.getSelection().removeAllRanges();
    },1000)
}
let history = 100
function setMax(){
    
    let vl = document.getElementById("max").value
    document.getElementById("g0").max = vl
    document.getElementById("g1").max = vl
    document.getElementById("g2").max = vl
    document.getElementById("g3").max = vl
    document.getElementById("g4").max = vl


    if(vl<history){
        all(vl)
        document.getElementById("g0").value = vl
    }
    history = vl
   
}

document.getElementById("max").addEventListener('keydown', function (event){ 
    if (event.keyCode == 13)
    {setMax()}
})