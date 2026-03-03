function setHora1(){
    let data = new Date()
    let campoHoras =  document.getElementById('hora1')
    let hora = data.getHours()

    if(hora >= 10){
        campoHoras.innerHTML = hora
    } else{
        campoHoras.innerHTML = "0" + hora
    }
}

function setMin1(){
    let data = new Date()
    let campoMinutos = document.getElementById('min1')
    let min = data.getMinutes()
    
    if(min >= 10){
        campoMinutos.innerHTML = min
    } else{
        campoMinutos.innerHTML = "0" + min
    }
}

function setSeg1(){
    let data = new Date()
    let campoSegundo = document.getElementById('seg1')
    let seg = data.getSeconds()

    if(seg >= 10){
        campoSegundo.innerHTML = seg
    } else{
        campoSegundo.innerHTML = "0" + seg
    }
}

function initTime(){
    setInterval(setHora1,1000)
    setInterval(setMin1,1000)
    setInterval(setSeg1,1000)
}



function digitoHora(){
    let data = new Date
    let horaI = document.getElementById('horai')
    let h1 = data.getHours()

    if(h1 < 10){
        horaI.innerHTML = 0
    } else if(h1 < 20){
        horaI.innerHTML = 1
    } else{
        horaI.innerHTML = 2
    }

    let horaII = document.getElementById('horaii')
    let h2 = data.getHours()
    
    if(h2 < 10){
        horaII.innerHTML = h2
    } else if(h2 >= 10 && h2 < 20){
        horaII.innerHTML = h2 % 10
    } else{
        horaII.innerHTML = h2 % 20
    }
}


function digitoMinuto(){
    let data = new Date
    let minI = document.getElementById('mini')
    let m1 = data.getMinutes()

    if(m1 < 10){
        minI.innerHTML = 0
    } else if(m1 < 20){
        minI.innerHTML = 1
    } else if(m1 < 30){
        minI.innerHTML = 2
    } else if(m1 < 40){
        minI.innerHTML = 3
    } else if(m1 < 50){
        minI.innerHTML = 4
    } else if(m1 < 60){
        minI.innerHTML = 5
    }
    

    let minII = document.getElementById('minii')
    let m2 = data.getMinutes()
    
    if(m2 < 10){
        minII.innerHTML = m2
    } else if(m2 >= 10 && m2 < 20){
        minII.innerHTML = m2 % 10
    } else if(m2 >= 20 && m2 < 30){
        minII.innerHTML = m2 % 20
    } else if(m2 >= 30 && m2 < 40){
        minII.innerHTML = m2 % 30
    } else if(m2 >= 40 && m2 < 50){
        minII.innerHTML = m2 % 40
    } else if(m2 >= 50 && m2 < 60){
        minII.innerHTML = m2 % 50
    }
}


function digitoSegundo(){
    let data = new Date
    let segI = document.getElementById('segi')
    let s1 = data.getSeconds()

    if(s1 < 10){
        segI.innerHTML = 0
    } else if(s1 < 20){
        segI.innerHTML = 1
    } else if(s1 < 30){
        segI.innerHTML = 2
    } else if(s1 < 40){
        segI.innerHTML = 3
    } else if(s1 < 50){
        segI.innerHTML = 4
    } else if(s1 < 60){
        segI.innerHTML = 5
    }
    

    let segII = document.getElementById('segii')
    let s2 = data.getSeconds()
    
    if(s2 < 10){
        segII.innerHTML = s2
    } else if(s2 >= 10 && s2 < 20){
        segII.innerHTML = s2 % 10
    } else if(s2 >= 20 && s2 < 30){
        segII.innerHTML = s2 % 20
    } else if(s2 >= 30 && s2 < 40){
        segII.innerHTML = s2 % 30
    } else if(s2 >= 40 && s2 < 50){
        segII.innerHTML = s2 % 40
    } else if(s2 >= 50 && s2 < 60){
        segII.innerHTML = s2 % 50
    }
}

function rodaHora(){
    setInterval(digitoHora,1000)
    setInterval(digitoMinuto,1000)
    setInterval(digitoSegundo,1000)
}