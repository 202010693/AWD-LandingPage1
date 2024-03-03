function animateButton(day) {
  const button = document.getElementById(day);
  const box = document.createElement('div');
  box.classList.add('animation-box');

  button.appendChild(box);

  setTimeout(() => {
    box.style.transform = 'translateY(50px)';
    box.style.backgroundColor = '#e74c3c';
  }, 10);

  setTimeout(() => {
    box.remove();
  }, 600);
}
