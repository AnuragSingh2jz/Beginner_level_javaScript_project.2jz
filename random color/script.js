console.log("file is working")
let val=()=>{
    return Math.round(Math.random()*256);
}

let box=document.querySelectorAll(".box");
Array.from(box).forEach((element)=>{
    element.style.backgroundColor = randomcolor();
    element.innerHTML= randomcolor();
})

function randomcolor(){
    let x=val();
    let y=val();
    let z=val();
    let ans=`rgb(${x}, ${y}, ${z})`
    return ans
}
