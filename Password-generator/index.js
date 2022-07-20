const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let p1 = document.getElementById("p-1")
let p2 = document.getElementById("p-2")

function show() {
    p1.textContent = generate()
    p2.textContent = generate()
}

function generate() {
    let str = ""
    let count = document.getElementById("length").value
    let length_of_characters = characters.length
    let sym =  document.getElementById("isSym").checked
    let l = (sym)?length_of_characters:52;
    for(let i=0; i<count; i++) {   
        let index = Math.floor(Math.random()*l)
        str += characters[index]
    }
    return str
}

function copy(id) {
    let copyEl = document.getElementById(id)
    navigator.clipboard.writeText(copyEl.innerText)
    alert("Password "+ ((id==="p-1")?"1":"2") +" copied!")
}
