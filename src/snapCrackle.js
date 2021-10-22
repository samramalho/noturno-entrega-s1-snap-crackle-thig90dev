// Seu código vai aqui

function snapCrackle(maxValue){
    let message = '';
 for(let contador = 1; contador <= maxValue; contador++){
    //  Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
    if(contador % 2 == 1 && contador % 5 !== 0) {
         message = message +  ' Snap, ';
        
    }
    // Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, 
    // concatenar "SnapCrackle" no final da string.
    else if(contador %  2 == 1 && contador % 5 == 0){
        message = message + ' SnapCrackle, ';
        
    }
    // Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
    else if(contador % 5 == 0) {
        message = message + ' Crackle, ';
        
    }           
    /* Se número não for nem ímpar e nem múltiplo de 5,
      concatenar o próprio número no final da string.*/
    else if(contador %  2 !== 1 && contador % 5 !== 0) {
            message = message + contador + ', ';
    }
 } console.log(message);
} snapCrackle(12);



