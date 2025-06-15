let petCount = parseInt(localStorage.getItem('petCount')) || 0;
const counterEl = document.getElementById('counter');
const rockEl = document.getElementById('rock');

function updateUI() {
  counterEl.textContent = petCount;
}

rockEl.addEventListener('click', () => {
  petCount++;
  localStorage.setItem('petCount', petCount);
  updateUI();
});

function changeBackground(imagePath) {
  document.body.style.backgroundImage = `url('${imagePath}')`;
}

updateUI();
