
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
let translate = document.querySelector(".translate")
let close = document.querySelector(".close")
let volume = document.querySelector(".audio")
let audio;
function hightlight(string, target) {
    return string.replace(target, `<span style="color:red">${target}</span>`)
}
// first call : call the dictonary
btn.addEventListener("click", () => {
    fetch(url).then(res => res.json())
        .then(data => {
            resultw.innerText = data[0].word
            resultph.innerText = data[0].phonetics[1].text
            resultm.innerText = data[0].meanings[0].definitions[0].definition
            resulte.innerText = data[0].meanings[0].definitions[0].example
            audio = new Audio (data[0].phonetics[1].audio)
            translate.style.display = "block"
        })
        
})
volume.addEventListener('click',()=>{
    audio.play();
})
// second call : call the translate
translate.addEventListener('click', () => {
    const lala = resultm.innerText;
    let wt = `https://api.mymemory.translated.net/get?q=${lala}!&langpair=en|th`
    fetch(wt).then(res => res.json())
        .then(data => {
            const dont = data.responseData.translatedText
            resultt.innerText = dont
            close.addEventListener("click", () => {
                resultt.style.display = 'none'
            })
        })
})
clearbtn.addEventListener("click", () => {
    input.value = ""
    input.focus();
})