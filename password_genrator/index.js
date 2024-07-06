// i have used  Reconstructing the Array:
// let pass1= "p2em@n743";

function specialChar(){
    let type1 = ['!','@','#','$','%','&','&','*',];
    let key1 = Math.floor(Math.random()*type1.length);
    return type1[key1];
}
function genratePassword(type){
    let s1= specialChar()
    let r1 = String.fromCharCode(Math.round(Math.random()*(90 - 65)+65));
    let number1 = Math.round(Math.random()*10)
    let r2 = String.fromCharCode(Math.round(Math.random()*(122 - 97)+97));
    let r3 = String.fromCharCode(Math.round(Math.random()*(90 - 65)+65));
    let s2 = specialChar();
    let number2 = Math.round(Math.random()*1000)
    
    if(type == "hard"){
        let array_1 = [s1,r1,number1,r2,r3,s2,number2,r2,number2]
        return array_1.join('')
    }
    if(type == "medium"){
        let array_2 = [r1,number1,r2,r3,number2,r2,number2]
        return array_2.join('')
    }
    if(type == "easy"){
        let array_3 = [number1,number2,r2,number2]
        return array_3.join('')
    }
}
let pass_word= document.querySelector(".pass_word")


// 65 to 90 and 97 to 122 

let medium = document.querySelector("#medium").addEventListener('click',()=>{
    let div = document.createElement('div')
    div.innerHTML= `<h2><bold>medium = </bold>${genratePassword("medium")}</h2>`
    pass_word.appendChild(div)

})
let hard = document.querySelector("#hard").addEventListener('click',()=>{
    let div = document.createElement('div')
    div.innerHTML= `<h2><bold>Hard = </bold>${genratePassword("hard")}</h2>`
    pass_word.appendChild(div)
})
let easy = document.querySelector("#easy").addEventListener('click',()=>{
    let div = document.createElement('div')
    div.innerHTML= `<h2><bold>Easy = </bold>${genratePassword("easy")}</h2>`
    pass_word.appendChild(div)
})





