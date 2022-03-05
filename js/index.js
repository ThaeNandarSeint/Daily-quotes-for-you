let quote = document.querySelector("#quote");
let author = document.querySelector("#author")
const newBtn = document.querySelector("#new");
const soundBtn = document.querySelector("#sound");
const copyBtn = document.querySelector("#copy");
const shareBtn = document.querySelector("#share");

function randomQuote(){
    newBtn.innerText = "Loading Quote...";
    newBtn.classList.add("opacity-50");
    $url = "https://api.quotable.io/random";
    fetch($url)
    .then(respond => respond.json())
    .then(result => {
        quote.innerText = result.content;
        author.innerText = result.author;
        newBtn.innerText = "New Quote";
        newBtn.classList.remove("opacity-50");
    });    
}

newBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", ()=>{
    let utter = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utter);
})

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quote.innerText);
})

shareBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetUrl, "_blank")
})