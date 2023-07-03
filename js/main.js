const generateButton = document.querySelector('#generate-joke');
const textDisplay = document.querySelector('#modal h2');

const req = new XMLHttpRequest();

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    displayJoke(data.value);
    console.log(data);
  }
};

function generateJoke() {
  req.open('GET', 'https://api.chucknorris.io/jokes/random');
  req.send();
}

function displayJoke(text) {
  textDisplay.textContent = text;
}

window.addEventListener('load', generateJoke);
generateButton.addEventListener('click', generateJoke);
