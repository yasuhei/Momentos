function carregar(){
   var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dia = data.getDate()
    var mes = data.getMonth()
    
    //var hora = 19
   
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos do  dia ${dia} do mês ${mes+1} `
   if( hora >= 0 && hora < 12){
        img.src= 'manha1.png'
        document.body.style.background = '#e2cd9f'

    }  
    else if(hora >= 12 && hora <= 18){
        img.src= 'tarde.png'
        document.body.style.background = '#b9846f'

    }
    else {
        img.src='noite.png'
        document.body.style.background = '#515154'

}

        
        


}