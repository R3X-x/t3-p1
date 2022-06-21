do{
    pais=Number(prompt("Si proviene de Estados Unidos escriba por favor el numero 1, en cambio si proviene de Colombia escriba 2. If you come from the United States please type the number 1, instead if you come from Colombia type the number 2."))
    }while(isNaN(pais)||pais<1||pais>2)
    if(pais==1){ 
        do{
        alturaPies=Number(prompt("Please type your height in feet."))
        }while(isNaN(alturaPies)||alturaPies<0)
        do{
            temperaturaF=Number(prompt("Type your actual temperature in degrees Fahrenheit."))
        }while(isNaN(temperaturaF)||temperaturaF<0)
        do{
            acompañante1=Number(prompt("if you come with one or more partners write number 1, if not, please write number 2."))
        }while(isNaN(acompañante1)|| acompañante1<1|| acompañante1>2)
            
    }else if(pais==2){
        do{
            alturaMetros=Number(prompt("Escriba su altura en metros."))
        }while(isNaN(alturaMetros)|| alturaMetros<0)
        
        do{
            temperaturaC=Number(prompt("ingrese su temperatura actual en grados Celsius."))
        }while(isNaN(temperaturaC))
        do{
            acompañante2=Number(prompt("Si viene con uno o más acompañantes escriba 1, si no es asi escriba 2."))
        }while(isNaN(acompañante2)|| acompañante2<1|| acompañante2>2)
    
    }
    if(pais==1){
        if((alturaPies<4.6 && acompañante1==2) || temperaturaF>104){
            alert("No puede ingresar.")
    
        }else
        alert("Puede ingresar.")
    }
    
    
    if(pais==2){
        if((alturaMetros<1.4 && acompañante2==2)|| temperaturaC>38){
        alert("No puede ingresar.")
        }else
        alert("Puede ingresar.")
    }