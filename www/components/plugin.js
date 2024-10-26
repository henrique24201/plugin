// This is a JavaScript file

$(document).on("click","#alerta", function(){
 
     function alertDismissed(){
    }
    navigator.notification.alert("aleatório", alertDismissed,"alerta");
});
 
$(document).on("click","#confirm", function(){
    function confirma(buttonIndex){
        if(buttonIndex == "1"){    
        navigator.notification.alert("Escolheu a opção A");
        }else{
        navigator.notification.alert("Escolheu a opção B");
        }
    }
    navigator.notification.confirm("Escolha A ou B", confirma,"Escolha",['A','B']);
});
 
$(document).on("click","#beep", function(){
    navigator.notification.beep(4);
});
 
$(document).on("click","#vibra", function(){
    navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
});
