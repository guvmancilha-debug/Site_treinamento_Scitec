let index = 0;
function move(direction) {
    const track = document.getElementById("track");
    const slides = document.querySelectorAll(".slide");
    
    index += direction;

    if (index < 0) {
        index = slides.length -1;
    }
    else if (index >= slides.length) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
}