document.getElementById('main-bg').style.backgroundImage = "url('https://4kwallpapers.com/images/walls/thumbs_3t/5738.jpeg')";

let images = [
    'https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

// Select a random image from the array when the button is clicked

document.getElementById('change-image-button').addEventListener('click', function() {
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    document.getElementById('main-bg').style.backgroundImage = 'url(' + randomImage + ')';
  });

