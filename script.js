
window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const doi = document.querySelector(`.abc[data-key="${e.keyCode}"]`);
    if(audio){
        doi.classList.add('playing');
        audio.currentTime=0;
        audio.play();
        setTimeout(()=>{
            doi.classList.remove('playing');
        },100)
    }
});