let input = document.getElementById("input");
let result = document.querySelector(".result");
let btn = document.getElementById("btn");
let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let sound = document.getElementById("sound");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    vocab();
  }
});
function vocab() {
  let word = document.getElementById("input").value;
  fetch(`${url}${word}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
      <p>${word}</p>
      <button onclick="playSound()">
        <i class="fas fa-volume-up"></i>
      </button>
      <p>${data[0].meanings[0].partOfSpeech || ""}</p>
      <p>${data[0].phonetics[0].text || ""}</p>
      <p>${data[0].meanings[0].definitions[0].definition}</p>
      <p>${data[0].meanings[0].definitions[0].example || ""}</p>
      `;
      let volume = data[0].phonetics[0].audio || data[0].phonetics[1].audio || data[0].phonetics[2].audio ;
      sound.setAttribute("src", volume);
    });
}
function playSound() {
  sound.play();
}
