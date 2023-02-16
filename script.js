// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

//let images = ['https://i.scdn.co/image/ab67616d0000b2737e5947188bc00e547d85379d', 'https://i.scdn.co/image/ab67616d0000b273d2af333ea11148d368f12bb0', 'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/fb/67/41/fb6741e8-9af2-23a4-24a0-ca564fa183fb/888272096507_Cover.jpg/600x600bf-60.jpg', 'https://m.media-amazon.com/images/I/419q9PPoFPL.jpg', 'https://upload.wikimedia.org/wikipedia/en/2/23/RM_Mono.png'];

//let songNames = ['Cereal', 'Your Dog Loves You', 'Tea Time', 'Palette', 'seoul'];

//let artists = ['Crush, ZICO', 'Colde, Crush', 'Meenoi, 10 cm', 'IU, G-Dragon', 'RM'];

//let songLinks = ['https://open.spotify.com/track/3AjWddhlSnA3PO8DQYXgSD?si=f9494b5e8be84ed3', 'https://open.spotify.com/track/2XdyebP7KxClMOse2C5iyA?si=4446ab7aca2845df', 'https://open.spotify.com/track/3JISGU3qHjPaBdWSh6ZJdq?si=e359e5a8c62f4461', 'https://open.spotify.com/track/3y7ByLZ05tluscOTRgEJ9Y?si=298b11a8eab44ab7', 'https://open.spotify.com/track/4VcKLbECzwOQTYe3Sut6xJ?si=27a6e8faca3a46a5'];

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.
let song1 = 
{           images:'https://i.scdn.co/image/ab67616d0000b2737e5947188bc00e547d85379d',
songNames: 'Cereal',
artists: 'Crush, ZICO',
songLinks: 'https://open.spotify.com/track/3AjWddhlSnA3PO8DQYXgSD?si=f9494b5e8be84ed3'}

let song2 = 
{
  images: 'https://i.scdn.co/image/ab67616d0000b273d2af333ea11148d368f12bb0',
  songNames: 'Your Dog Loves You',
  artists: 'Colde, Crush',
  songLinks: 'https://open.spotify.com/track/2XdyebP7KxClMOse2C5iyA?si=4446ab7aca2845df' 
}

let song3 = 
{
  images: 'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/fb/67/41/fb6741e8-9af2-23a4-24a0-ca564fa183fb/888272096507_Cover.jpg/600x600bf-60.jpg',
  songNames: 'Tea Time',
  artists: 'Meenoi, 10 cm',
  songLinks: 'https://open.spotify.com/track/3JISGU3qHjPaBdWSh6ZJdq?si=e359e5a8c62f4461' 
}

let song4 = 
{
  images: 'https://m.media-amazon.com/images/I/419q9PPoFPL.jpg',
  songNames: 'Palette',
  artists: 'IU, G-Dragon',
  songLinks: 'https://open.spotify.com/track/3y7ByLZ05tluscOTRgEJ9Y?si=298b11a8eab44ab7'
}

let song5 = 
{
  images:   'https://upload.wikimedia.org/wikipedia/en/2/23/RM_Mono.png',
  songNames: 'seoul',
  artists: 'RM',
  songLinks: 'https://open.spotify.com/track/4VcKLbECzwOQTYe3Sut6xJ?si=27a6e8faca3a46a5' 
}




// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let songs = [song1, song2, song3, song4, song5]


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {
  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let userImg = image.value;
  let userSong = songName.value;
  let userArtist = artist.value;
  let userLink = songLink.value;

  // task 10: use `.push()` to add each input value to the correct array.

  let newSong = 
  {
    images: userImg,
    songNames: userSong,
    artists: userArtist,
    songLinks: userLink
  };

  songs.push(newSong);
  console.log(songs);
  

}

function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  for (let i = 0; i < songs.length; i++) {
    displayImage.insertAdjacentHTML("beforeend", `<p><img src=${songs[i].images}></p>`)
  }
  
  for (let i = 0; i < songs.length; i++) {
    displaySong.insertAdjacentHTML("beforeend", `<p>${songs[i].songNames}</p>`)
  }

  for (let i = 0; i < songs.length; i++) {
    displayArtist.insertAdjacentHTML("beforeend", `<p>${songs[i].artists}</p>`)
  }

  for (let i = 0; i < songs.length; i++) {
    displayLink.insertAdjacentHTML("beforeend", `<p><a href=${songs[i].songLinks}>Click here to listen</a></p>`)
  }


}
// click event to add and display songs
add.onclick = function() {
  
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
  image.value = "";
  songName.value = "";
  artist.value = "";
  songLink.value = "";

  
};

// function call to display stored songs
displaySongInfo();

/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}
