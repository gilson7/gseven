var valueEdit = ""
//essa variavel armazena qua layer esta selecionada
layerSelect = 0
layerNumber = 0
//esse objeto armazena as camadas da layer
var objLayers=[
//                 1x    2y       4blur   3size   5color
    [["L0"],[[""],["6px"] ,["6px"] ,["0px"],["0px"], ["rgba(44,105,141"],[","+0.50+")"]]]

]
function layerClick(value,e){
    layerSelect = value
    document.getElementById("color").value = rgbToHexInit(objLayers[value][1][5]+")")
    reseTinput(value)
    loadMemuLayers()
}
var arryIds = [
    ["movex"],["movey"],["blur"],["size"],["opacity"]
]
// resetndo valor dos inputs aclicar nas layers
function reseTinput(value){
    arryIds.forEach((ele,id)=>{

        document.getElementById(ele).value = `${objLayers[value][1][id+1]}`.replace("px","")
       
    })
    document.getElementById("movexValue").innerHTML=objLayers[value][1][1]
    document.getElementById("moveyValue").innerHTML=objLayers[value][1][2]
    document.getElementById("sizeValue").innerHTML=objLayers[value][1][4]
    document.getElementById("blurValue").innerHTML=objLayers[value][1][3]
    document.getElementById("opacityValue").innerHTML=`${objLayers[value][1][6]}`.replace(",","").replace(")","")
    let hjk = `${objLayers[value][1][6]}`.replace(",","").replace(")","")
    
    if (hjk=="1") {
        document.getElementById("opacityValue").innerHTML="100%"
    }

    document.getElementById("opacity").value  = `${objLayers[value][1][6]}`.replace(")","").replace(",","")
    if(objLayers[value][1][0] == ""){
        document.getElementById("offset").click()
    }
    else
    if(objLayers[value][1][0] == "inset"){
        document.getElementById("inset").click()
    }
    
}
function inputClick(inst,value){
    switch(inst){
        case "inset":
            orientationX(inst,value)
        break
        case "offset":
            orientationX(inst,value)
        break
        case "movex":
            movex(inst,value)
        break
        case "movey":
            movey(inst,value)
        break
        case "size":
            size(inst,value)
        break
        case "blur":
            blur(inst,value)
        break
        case "opacity":
            opacity(inst,value)
        break
        case "color":
            color(inst,value)
        break
    }
}
function orientationX(inst,value){
    if(value=="inside"){
        valueEdit="inset"
        
    }
    else
    if(value=="outside"){
        valueEdit=""
    }
    objLayers[layerSelect][1][0]=[valueEdit]
    apply()
}
function movex(inst,value){
    objLayers[layerSelect][1][1]=[value+"px"]
    document.getElementById(inst).value = value
    document.getElementById(inst+"Value").innerHTML = value+"px"
    apply()

}
function movey(inst,value){
    objLayers[layerSelect][1][2]=[value+"px"]
    document.getElementById(inst).value = value
    document.getElementById(inst+"Value").innerHTML = value+"px"
    apply()
}
function size(inst,value){
    objLayers[layerSelect][1][4]=[value+"px"]
    document.getElementById(inst).value = value
    document.getElementById(inst+"Value").innerHTML = value+"px"
    apply()
}
function blur(inst,value){
    objLayers[layerSelect][1][3]=[value+"px"]
    document.getElementById(inst).value = value
    document.getElementById(inst+"Value").innerHTML = value+"px"
    apply()
}
function opacity(inst,value){
    objLayers[layerSelect][1][6]=[","+value+")"]
    document.getElementById(inst).value = value
    document.getElementById(inst+"Value").innerHTML = `${value}`
    if (value==1) {
        document.getElementById(inst+"Value").innerHTML = `100%`
    }
    apply()
}
function color(inst,value){
    let r = convertColor(value).rChannel
    let g = convertColor(value).gChannel
    let b = convertColor(value).bChannel
    let rgb = r+","+g+","+b
    objLayers[layerSelect][1][5]=["rgba("+rgb]
    document.getElementById(inst).value = value
    apply()
}
let style = ""
let virgula = ","
function apply(){
style = ""
    for (let index = 0; index < objLayers.length; index++) {
        if (index>=objLayers.length||index==0) {
            document.getElementById("block").style.boxShadow=""
            virgula = ""
        }
        else{
            virgula = ","
        }
        indStyle = `${objLayers[index][1][0]+" "+objLayers[index][1][1]+" "+objLayers[index][1][2]+" "+objLayers[index][1][3]+" "+objLayers[index][1][4]+" "+objLayers[index][1][5]+" "+objLayers[index][1][6]}` 
        style +=virgula+`${objLayers[index][1][0]+" "+objLayers[index][1][1]+" "+objLayers[index][1][2]+" "+objLayers[index][1][3]+" "+objLayers[index][1][4]+" "+objLayers[index][1][5]+" "+objLayers[index][1][6]}` 
        // console.log(style)
        document.getElementById("block").style.boxShadow=style
            //ATUALIZANDO VALOR DAS LAYERS
        document.getElementById(`${index}`).innerHTML=`
        <span class="layerName">${objLayers[index][0]}</span>
        <span class="layerValue">${indStyle}</span>
        <button class="delete" onclick="deleteL(${index})">
            <span class="material-symbols-outlined">
                delete
            </span>
        </button>
        `
    }
    document.getElementById("text").value = 
`box-shadow:${document.getElementById("block").style.boxShadow}; 
-webkit-box-shadow: ${document.getElementById("block").style.boxShadow}; 
-moz-box-shadow:  ${document.getElementById("block").style.boxShadow};`
    // document.getElementById.style.boxShadow =""
}
apply()
//convertendo hex em hgb
function convertColor(color) {
    /* Check for # infront of the value, if it's there, strip it */
    if(color.substring(0,1) == '#') {
       color = color.substring(1);
     }
    var rgbColor = {};
    /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
    rgbColor.rChannel = parseInt(color.substring(0,2),16);
    rgbColor.gChannel = parseInt(color.substring(2,4),16);
    rgbColor.bChannel = parseInt(color.substring(4),16);
  
    return rgbColor;
}
function listLayers(){
    document.getElementById("layers").innerHTML=""
    objLayers.forEach((ele,id)=>{
    console.log(ele,id)
    document.getElementById("layers").innerHTML+=` <div class="layer" id="${id}" onclick="layerClick(this.id,this)">
    <span class="layerName">${ele[1][0] + ele[1][1] + ele[1][2] +ele[1][3] + ele[1][4]}</span>
    <span class="layerValue">fds</span>
    </div>`
    
    })
    document.getElementById(0).className="layer activeL"
}
function newLayer(){
    layerNumber +=1
    let layerCreated = [["L"+`${layerNumber}`],[[valueEdit],["0"] ,["0px"] ,["30px"],["0px"], ["rgba(0 ,0 ,0 "],[","+1+")"]]]
    objLayers.unshift(layerCreated)
    reseTinput(layerNumber)
    listLayers()
    loadMemuLayers()
    document.getElementById(0).click()
}
function deleteL(elem){
    if (objLayers.length>1) {
        objLayers.splice(elem,1)
        layerNumber -=1
        layerSelect=0
        listLayers()
        loadMemuLayers()
        setTimeout(()=>{
            listLayers()
            document.getElementById(0).click()
        },20)
    }
}
function rgbToHexInit(valorInicial){
    let color = valorInicial.replace("rgba","").replace("(","").replace(")","")
    var arr = JSON.parse("[" + color + "]");
    let r = arr[0]
    let g = arr[1]
    let b = arr[2]
    // console.log(r,g,b)
    return rgbToHex(r, g, b)
}
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
// #FF05FF
//change block color
function changeBlockColor(value){
    document.getElementById("block").style.backgroundColor= value
}
//
function changeBackColor(value){

    document.getElementById("div1").style.backgroundColor= value
}
document.getElementById("div1").addEventListener("click",(e)=>{
    e.stopPropagation()
    let local = e.path[0].id
    if(local == "block"){
        document.getElementById("blockColor").click()
    }else if (local == "div1") {
        document.getElementById("backColor").click()
    }
})
//copiando estilo
function copyx(me){
    document.getElementById("text").select()
    document.execCommand("copy")

    me.innerHTML="copied ( :"
    changeStyles(me,"transform","scale(0.90)")

    setTimeout(()=>{
        me.innerHTML="copy"
        changeStyles(me,"transform","scale(1)")
        window.getSelection().removeAllRanges();
    },500)
}
//this function change styles
function changeStyles(elem,property,style){
    elem.style[`${property}`]=style
}

