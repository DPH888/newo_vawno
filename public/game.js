
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto

}

    getMap()
function onMapLoad(obj){
    console.log(obj.currebtTarget.responseText)
    console.log(JSON.parse(obj.currebtTarget.responseText))
    map= JSON.parse(obj.currebtTarget.responseText)
}
function getMap(){
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.addEventListener("load",onMapLoad)
    xmlhttp.open("GET","/map")
    xmlhttp.send()
}
function putRisuvaj(x,y,r,g,b){
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.addEventListener("load",getMap)
    xmlhttp.open("PUT","/risuvaj?X="+x+"&Y="+y+"&R="+r+"&G="+g+"&B="+b)
    xmlhttp.send()
}
function draw() {
   for(let x=0;x<10;x++){
    for(let y=0;y<10;y++){
        context.beginPath()
        context.rect(x,y,100)
        context.fillStyle = rgb(r,b,g);
    }
   }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

