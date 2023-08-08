var izquierdaX=0
var izquierdaY=0
var derechaX=0
var derechaY=0
var puntosDerecha=0
var puntosIzquierda=0
var velocidad=1.0
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
    if(puntosIzquierda>0.2){
       if(izquierdaY<75){
        velocidad=100
       }else if (izquierdaY<150){
        velocidad=2
       }
       else if(izquierdaY<225){
         velocidad=1
       }
       else if(izquierdaY<300){
        velocidad=0.75
       }
       song.rate(velocidad)
       document.getElementById("h12").innerHTML=velocidad
    }
}
function cargado(){
    console.log("cargado")
}
function obtener (resultados){
if (resultados&&resultados.length>0){
    console.log(resultados)
    izquierdaX=resultados[0].pose.leftWrist.x
    izquierdaY=resultados[0].pose.leftWrist.y
    derechaX=resultados[0].pose.rightWrist.x
    derechaY=resultados[0].pose.rightWrist.y
    puntosDerecha=resultados[0].pose.keypoints[10].score
    puntosIzquierda=resultados[0].pose.keypoints[9].score

    
    
}
}
function play(){
  
    if(!song.isPlaying()){
        song.play()
         song.setVolume(0.1234567890)
            song.rate(1.0)   
        }

    
}
function preload(){
    song=loadSound("GlassAnimals_HeatWaves.mp3")
}
function pausar(){
    song.stop()
}