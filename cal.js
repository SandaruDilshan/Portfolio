let displayvalue = "";

function apendToDisplay(value){
    
    
    displayvalue += value;
    document.getElementById("display").value = displayvalue;
    return displayvalue;
}


function clearDisplay(){
    displayvalue="";
    document.getElementById("display").value = displayvalue;
    
}

function deleteValue(){
    let alltext =document.getElementById("display").value;
    //console.log(typeof(alltext));
    let a =alltext.length;
    let arr = [];
    let x;
    console.log(alltext.slice(0,i-1));

    for( var i =0; i <a; ){
       
    //    // arr.push(alltext.charAt(i));
      
    //     x += alltext.charAt(i);
         i++;
    //     console.log(x);
        
    }
    x = alltext.slice(0,i-1);
    document.getElementById("display").value = x;
    
    // do{
    //     var i = 0;
        
    //     console.log(alltext.charAt(i));
    // }while(i <a);
    
   //arr-=1;
   let y = alltext.charAt(i-1);
   //console.log(y);

   console.log(displayvalue);
}

function calculatorResult(value){
    try{
        const result = eval(displayvalue);
        document.getElementById("display").value = result;
    }catch (error) {
        document.getElementById("display").value = error;
    }
}