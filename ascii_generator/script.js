



let fun=(event,keyCode)=>{
    if(!event.shiftKey && keyCode >=65 && keyCode <=90) return keyCode + 32;
    else return keyCode    
}


document.body.addEventListener('keydown',(event)=>{
    let x=document.querySelector('.btn');
    x.innerHTML=`${event.key} - ${fun(event,event.keyCode)}`
    console.log(event.key);
    event.stopPropagation();
})













































