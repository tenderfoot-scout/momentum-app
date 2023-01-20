//document.getElementById('main-bg').style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/681/53/214/background-color-texture-wallpaper-preview.jpg')";

let images = [
    '/bg-images/bg-1.jpg',
    '/bg-images/bg-2.jpg',
    '/bg-images/bg-3.jpg',
    '/bg-images/bg-4.jpg',
    '/bg-images/bg-5.jpg',
    '/bg-images/bg-6.jpg',
];

// Select a random image from the array when the button is clicked

document.getElementById('change-image-button').addEventListener('click', function() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    document.getElementById('main-bg').style.backgroundImage = 'url(' + randomImage + ')';
  });

