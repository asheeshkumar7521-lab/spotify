console.log('Welcome to spotify');

// Initialize the varibles
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem')); 
let songs = [
    { songName: "salam-e-ishq",filepath: "song/1.mp3",coverpath: "covers/1.jpg"},
    { songName: "dil-dhadakne-do",filepath: "song/2.mp3",coverpath: "covers/2.jpg"},
    { songName: "dil-mera- mane-hi-nahi",filepath: "song/3.mp3",coverpath: "covers/3.jpg"},
    { songName: "hanuman",filepath: "song/4.mp3",coverpath: "covers/4.jpg"},
    { songName: "kontraa-teri-ye-ada",filepath: "song/5.mp3",coverpath: "covers/5.jpg"},
    { songName: "-khwaab-ka-musafir",filepath: "song/6.mp3",coverpath: "covers/6.jpg"},
    { songName: "jab-se-tumko-dekha",filepath: "song/7.mp3",coverpath: "covers/7.jpg"},
    { songName: "tere-bin-adhura",filepath: "song/8.mp3",coverpath: "covers/8.jpg"},
    { songName: "teri-khamoshi",filepath: "song/9.mp3",coverpath: "covers/9.jpg"},
    { songName: "tera-intezaar-hai",filepath: "song/10.mp3",coverpath: "covers/10.jpg"},    
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// AudioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-cicle');
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listener to  Events
audioElement.addEventListener('timeupdate', ()=>{


    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;


})

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})


const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach
((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex = parseInt(e.currentTarget.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
         mastersongname.innerText = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa--play-circle');
         masterPlay.classList.add('fa-pause-circle');



    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0

    }
    else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
         mastersongname.innerText = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa--play-circle');
         masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.remove('fa--play-circle');
         masterPlay.classList.add('fa-pause-circle');

})

