const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

const update = () => {
  circles.forEach((circle, index) => {
    console.log(`index: ${index} and currentactive: ${currentActive}`);

    // add active class styles to done and current steps
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // toggle button:disabled based on number of actives
  if (actives.length == 1) {
    prev.disabled = true;
  } else if (actives.length == circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
