const slides = document.querySelector(".slides");
const contents = document.querySelectorAll(".slide-content");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = 5;

/* Update Slide */
function updateSlide(){
    slides.style.transform = `translateX(-${index * 100}%)`;

    contents.forEach(c=>c.style.animation="none");
    setTimeout(()=>{
        contents[index].style.animation="fadeUp 0.8s ease";
    },50);

    dots.forEach(d=>d.classList.remove("active"));
    dots[index].classList.add("active");
}

/* Buttons */
nextBtn.addEventListener("click",()=>{
    index = (index + 1) % totalSlides;
    updateSlide();
});

prevBtn.addEventListener("click",()=>{
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
});

/* Dot Click */
dots.forEach((dot,i)=>{
    dot.addEventListener("click",()=>{
        index=i;
        updateSlide();
    });
});

/* Auto Slide */
setInterval(()=>{
    index = (index + 1) % totalSlides;
    updateSlide();
},4000);


const mic = document.getElementById("aiMic");
const overlay = document.getElementById("listenOverlay");

mic.addEventListener("click", () => {

    // Start listening animation
    mic.classList.add("listening");
    overlay.classList.add("active");

    // After 1.5s redirect (change link later)
    setTimeout(()=>{
        window.location.href = "voice.html"; // 👈 change page name later
    },1500);
});