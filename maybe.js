
let btn = document.getElementById("inputbtn")
let clearbtn = document.getElementById("clearbtn")
let input = document.getElementById("input")
let word = input.value
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
let resultw = document.getElementById("result-word")
let resultph = document.getElementById("result-phonetics")
let resultm = document.getElementById("result-mean")
let resultt = document.getElementById("transalate-result")
let transalate= document.querySelector(".transalate")
btn.addEventListener("click",()=>{
    fetch(url).then(res=>res.json())
    .then(data=>{
        if(word == input.value){
            resultw.innerText = data[0].word
            resultph.innerText = data[0].phonetic
            resultm.innerText = data[0].meanings[0].definitions[0].definition
            transalate.style.display = "block"
        }
    })
})
transalate.addEventListener('click',()=>{
    const lala = resultm.innerText;
    let wt = `https://api.mymemory.translated.net/get?q=${lala}!&langpair=en|th`
    fetch(wt).then(res=>res.json())
    .then(data=>{
        setTimeout(() => {
            resultt.innerText =  data.responseData.translatedText
        }, 4000);
    })
})
clearbtn.addEventListener("click",()=>{
    input.value = ""
    input.focus();

})