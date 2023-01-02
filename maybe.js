
let btn = document.getElementById("inputbtn")
let clearbtn = document.getElementById("clearbtn")
let input = document.getElementById("input")
let word = input.value
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
let resultw = document.getElementById("result-word")
let resultph = document.getElementById("result-phonetics")
let resultm = document.getElementById("result-mean")
let resulte = document.getElementById("result-example")
let resultt = document.getElementById("translate-result")
let translate= document.querySelector(".translate")
let close= document.getElementById("close")

function hightlight(string,target){
    return string.replace(target,`<span style="color:red">${target}</span>`)
}
// first call : call the dictonary
btn.addEventListener("click",()=>{
    fetch(url).then(res=>res.json())
    .then(data=>{
        if(word == input.value){
            resultw.innerText = data[0].word
            resultph.innerText = data[0].phonetic
            resultm.innerText = data[0].meanings[0].definitions[0].definition
            resulte.innerText = data[0].meanings[0].definitions[0].example
            translate.style.display = "block"
        }
    })
})
// second call : call the translate
translate.addEventListener('click',()=>{
    const lala = resultm.innerText;
    let wt = `https://api.mymemory.translated.net/get?q=${lala}!&langpair=en|th`
    fetch(wt).then(res=>res.json())
    .then(data=>{
        resultt.innerText =  data.responseData.translatedText
        close.addEventListener("click",()=>{
            resultt.style.display = 'none'
        })
    })
})
clearbtn.addEventListener("click",()=>{
    input.value = ""
    input.focus();

})
