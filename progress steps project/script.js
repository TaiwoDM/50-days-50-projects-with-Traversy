const progressBar = document.getElementById('progress-container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll(".circle");

let currentIndex = 1;

next.addEventListener('click', () => {
    currentIndex++;
    
    if(currentIndex > circles.length) {
        currentIndex = circles.length;
    }

    update();
})

prev.addEventListener('click', () => {
    currentIndex--;

    if(currentIndex < 1){
        currentIndex = 1;
    }

    update();
})


function update () {
    circles.forEach((circle, index) => {
        if (index < currentIndex) {
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    
    const actives = document.querySelectorAll('.active');

    progressBarWidth = ((actives.length -1) / (circles.length -1) * 100) + '%';

    progress.style.width = progressBarWidth;

    if (currentIndex === 1) {
        prev.disabled = true;
    }else if(currentIndex === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}