let box = document.querySelector(".box");
let btn = document.querySelector(".btn");
let container2 = document.querySelector(".conatiner2");

btn.addEventListener('click', function() {
    let value = box.value;
    let x = document.createElement("div");
    
    // Correcting the style attribute with proper syntax
    x.setAttribute("style", "display: flex; justify-content: flex-start; background-color: aliceblue; height: 50px; width: 500px; margin-top: 10px; font-size: 30px; border-radius:5px");
    
    x.innerHTML = value;
    container2.append(x);
});
