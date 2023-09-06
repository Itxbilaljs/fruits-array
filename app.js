const div = document.querySelector("div")
const paragraph = document.querySelector("p")
const fruits = ["Banana","Mango","Apple","Grapes","Kiwi","Peach","Orange","Watermelon" ]
for (i=0; i<fruits.length; i++){
    div.innerHTML +=`<button class="btn" onclick="show_item(${i})">${fruits[i]}</button>`
}
function show_item (i){
    paragraph.innerHTML += ` ${fruits[i]},  ` 

}