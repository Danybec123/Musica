function setup(){
canvas=createCanvas(300,300)
video=createCapture(VIDEO)
video.hide()
video.size(300,300)
poses=ml5.poseNet(video,cargado)
poses.on("pose",obtener)
}
function draw(){
    image(video,0,0,300,300)
}
function cargado(){
    console.log("cargado")
}
function obtener (resultados){
if (resultados&&resultados.length>0){
    console.log(resultados)
}
}
function play(){
  
    if(!song.isPlaying()){
        song.play()
    }
}
function preload(){
    song=loadSound("GlassAnimals_HeatWaves.mp3")
}
function pausar(){
    song.stop()
}