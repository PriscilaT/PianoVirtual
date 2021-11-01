// get all keys

const keys = document.querySelectorAll(".key")

// play notes
function playNote(event){
    // console.log(event.type)
    // console.log(event.target.dataset.key)

    // keyCode
    let audioKeyCode = getKeyCode(event)
    
    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    // console.log(key)

    // if key exists
    const cantFoundAnyKey = !key
    if(cantFoundAnyKey){
        return; //não toca nada e sai da função
    }

    //play audio
    addPlayingClass(key)
    playAudio(audioKeyCode)

}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event){

    let keyCode;
    const iskeyboard = event.type === "keydown"; //true ou false

    if(iskeyboard){
        keyCode = event.keyCode
    }else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function registerEvents() {
    // click with mouse
    keys.forEach (function(key){
        // console.log(key.dataset.note) 
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })

    // keyboard type
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)

