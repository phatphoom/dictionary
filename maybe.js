
let btn = document.getElementById("inputbtn")
let clearbtn = document.getElementById("clearbtn")
let input = document.getElementById("input")
let word = input.value
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
let resultw = document.getElementById("result-word")
let resultph = document.getElementById("result-phonetics")
let resultm = document.getElementById("result-mean")
let resulte = document.getElementById("result-example")
let resultpos = document.getElementById("result-pos")
let resultsyn = document.getElementById("result-syn")
let resultt = document.getElementById("translate-result")
let translate = document.querySelector(".translate")
let close = document.querySelector(".close")
let volume = document.querySelector(".audio")
let audio;
let contrainer = document.querySelector(".empty")

// first call : call the dictonary
btn.addEventListener("click", () => {
    fetch(url).then(res => res.json())
        .then(data => {
            resultw.innerText = data[0].word
            resultph.innerText = data[0].phonetics[1].text
            resultm.innerText = data[0].meanings[0].definitions[0].definition
            resulte.innerText = data[0].meanings[0].definitions[0].example
            resultpos.innerText = data[0].meanings[0].partOfSpeech
            resultsyn.innerText = data[0].meanings[0].synonyms[0]
            audio = new Audio(data[0].phonetics[1].audio)
            translate.style.display = "block"
        })

})
volume.addEventListener('click', () => {
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
    input.focus();
    let p = document.createElement("p");
    p.innerText = input.value
    contrainer.appendChild(p)
    input.value = ""
})