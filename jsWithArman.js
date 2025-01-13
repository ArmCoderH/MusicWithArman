// let songItem = new Audio('Zaalima Raees Shah Rukh Khan  Mahira Khan Arijit Singh  Harshdeep Kaur JAM8 Pritam.mp3')
// songItem.play()


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myPrograssBar  =document.getElementById('myPrograssBar')
let gift  =document.getElementById('gift')
let masterName =document.getElementById('masterName')
let songItems = Array.from(document.getElementsByClassName('songItems'))

let songs = [
    {songName : "Bandeya", filePath : "songs/Bandeya.mp3", coverPath  : "covers/bandeya.jpg"},
    {songName : "Dekhha Tenu", filePath : "songs/Dekhha_tenu.mp3", coverPath  : "covers/dekhha_tenu.jpeg"},
    {songName : "Kaise Hua", filePath : "songs/Kaise_Hua.mp3", coverPath  : "covers/kese.jpg"},
    {songName : "Mere Humsafar", filePath : "songs/Mere_Humsafar.mp3", coverPath  : "covers/mere.jpeg"},
    {songName : "Ranjha", filePath : "songs/ranjha.mp3", coverPath  : "covers/ranjha.jpeg"},
    {songName : "Surili Akhiyo Wale", filePath : "songs/surili_akhiyo.mp3", coverPath  : "covers/suriakhyovale.jpg"},
    {songName : "Tere Bina Na Guzara", filePath : "songs/Tere_Bina_Na_Guzara.mp3", coverPath  : "covers/tere.jpg"},
    {songName : "Ye Jo Halka Halka Saroor", filePath : "songs/ye_jo_halka.mp3", coverPath  : "covers/halka.jpeg"},
    {songName : "Zalima", filePath : "songs/zalima.mp3", coverPath  : "covers/zaalima.jpg"},
    {songName : "Zaroor", filePath : "songs/zaroor.mp3", coverPath  : "covers/zaroor.jpg"},
]

//change and play main bottom song

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-circle-pause')
        gift.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-play-circle')
        gift.style.opacity = 0
    }
})

//manage progresss baar
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myPrograssBar.value = progress;
})

myPrograssBar.addEventListener('change',()=>{
    audioElement.currentTime = myPrograssBar.value * audioElement.duration/100
})


songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

const makeAllPalays = () => {
    // Reset all song item play buttons to play state
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    // Add event listener to each song item play button
    element.addEventListener('click', (e) => {
        // Reset all play buttons before toggling the clicked one
        makeAllPalays();
        
        // Toggle the clicked play button to pause state
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`
        masterName.innerHTML = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play()
        gift.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
    });
});


document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex = 0;
    }
    else
    {
        songIndex += 1
    }
    
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play()
        gift.style.opacity = 1;
        masterName.innerHTML = songs[songIndex].songName
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex = 0;
    }
    else
    {
        songIndex -= 1
    }
    
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime = 0;
        audioElement.play()
        gift.style.opacity = 1;
        masterName.innerHTML = songs[songIndex].songName
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');

})



