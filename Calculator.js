
const display = document.getElementById('display');



function Press(input){

    display.value += input
    

    
   
 




   
}

function Calculate(){

    try{
        display.value = eval(display.value);

    }
    catch(arror){
        display.value = "Error: ";
    }
    
}

function Clear(){

    display.value = "";
}


