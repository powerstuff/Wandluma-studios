const aboutTab=document .querySelector(".tab");
const servicebtn = querySelector(".servicebtn");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const profileBtn = document.querySelector(".profile-music-btn");
const profileMusic = document.querySelector(".profile-music");
const searchButton =document.getElementById('search-button');
const searchInput =document.getElementById('search-input');
const resultsDiv =document.getElementById('results');


searchButton.addEventListener('click',()=>{
  const query = searchInput.nodeValue.trim();
  if (query){
    fetchMusic(query);
  }
  else{
    resultsDiv.innerHTML= '<p>please enter a search term.</p>';
  }
});

async function fetchMusic(query){
  const API_URL=`https:
  try{
    const response=await fetch(API_URL);
    const data=await response.json();
    displayResults(data.results);

  } catch(error){
    console.error('Error fetching music:',error);
    resultDiv.innerHTML=`//itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=20`;
    try{
      const response=await fetch(API_URL);
      const data =await response.json();
      displayResults(data.results);
  
    } catch(error){
      console.error('Error fetching music:',error);
      resultsDiv.innerHTML= '<p>please enter a search term.</p>';
    }
  }
  function displayResults(songs){
    resultsDiv.innerHTML='';
    if (songs.length===0){
      resultsDiv.innerHTML='<p>No results found.</p>';
      return;
    }
    songs.forEach(song=>{
      const songDiv=document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML=`
      <img src="${song.artworkUrl100}" alt=${song.trackName}">
      <h3>${song.trackName}</h3>
      <p>${song.artistName}</p>
      <p><strong>Price:</strong> $${song.trackPrice.toFixed(2)}</p>
      <audio class="audio-preview" controls>
      <source src="${song.previewUrl}" type=audio/mpeg">
      your browser does not support the audio element.
      </audio>
      `;
      resultsDiv.appendChild(songDiv);
    });
  }



aboutTab.addEventListener("click",()=>{
    if(!about.classList.contains("show-about")){
      //sab
    services.classList.remove("show-services");
    home.classList.add("home-hide");
    about.classList.add("show-about");
    profileMusic.classList.remove("show-profile-music"); 
    }
    
});

servicebtn.addEventListener("click",()=>{
  if(!services.classList.contains("show-services")){
  services.classList.remove("show-services");
  home.classList.add("home-hide");
  about.classList.add("show-about");
  profileMusic.classList.remove("show-profile-music"); 
  }
  
});
profileMusic.addEventListener("click",()=>{
  if(!about.classList.contains("show-profile-music")){
  services.classList.remove("show-services");
  home.classList.add("home-hide");
  about.classList.add("show-about");
  profileMusic.classList.remove("show-profile-music"); 
  }
  
});
const selectFileButton = document.getElementById('select-file-button');
const fileInput = document.getElementById('file-input');
const {test,expect}=require('@playwright/test');

test('upload file', async({page})=> {
        await page.goto('https:
        await page.locator('//example.com');
        await page.locator('input[type="file"]').setInputFiles('path/to/file.txt');
    });


selectFileButton.addEventListener('click',()=>{
    fileInput.click();
});
fileInput.addEventListener('change',(e)=>{
    const selectedFile= e.target.files[0];
    if(selectedFile){
        const formData =new FormData();
        formData.append('file',selectedFile);
        fetch('/upload',{
            method:'POST',
            body:formData,
        })
        .then((Response)=>Response.json())
        .then((data)) => console.log(data))
        .catch((error))=> console.error(error))
    } 

});
