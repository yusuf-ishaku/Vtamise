// For the first carousel(vertical)
const track = document.querySelector(".carousel-slidepack");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-movers--right");
const prevButton = document.querySelector(".carousel-movers--left");
const slideSize = slides[0].getBoundingClientRect().height;
const setSlidePosition = (slide, index) =>{
    slide.style.top = `${slideSize*index}px`
}
slides.forEach(setSlidePosition);
const moveSlide = () =>{
    const currentSlide = track.querySelector(".current-slide");
    let targetSlide = currentSlide.nextElementSibling;
    if(!targetSlide)targetSlide = slides[0];
    track.style.transform = `translateY(-${targetSlide.style.top})`
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    // console.log("moved");
}
setInterval(moveSlide, 6000);//Vertical carousel code ends here.

// For star rating
const starater = document.getElementsByClassName('starater');
const ourStars = Array.from(starater);
const starIt = (stars) =>{
    const eachStar = Array.from(stars.children);
for(let x = 0; x<eachStar.length; x++){
eachStar[x].addEventListener("click", e =>{
    if(eachStar[x].classList.contains('checked')){
        for(let i=x; i<eachStar.length; i++){
        eachStar[i].classList.remove('checked');
        }
    }else if(!eachStar[x].classList.contains("checked")){
        for(let i=0; i<=x; i++){
            eachStar[i].classList.add('checked');
        }
    }
});
}
}
ourStars.forEach(starIt);//Star code ends here

// Light slider code
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
//Light slider code ends...