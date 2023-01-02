let btn = document.getElementById("inputbtn")
let input = document.getElementById("input")
let word = input.value
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
let resultw = document.getElementById("result-word")
let resultph = document.getElementById("result-phonetics")
btn.addEventListener("click",()=>{
    fetch(url).then(res=>res.json())
    .then(data=>{
        resultw.innerText = data[0].word
        resultph.innerText = data[0].phonetic
    })
})