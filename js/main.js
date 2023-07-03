const generateButton = document.querySelector('#generate-joke');
const textDisplay = document.querySelector('#modal h2');

function generateJoke() {
  const req = new XMLHttpRequest();

  req.open('GET', 'https://api.chucknorris.io/jokes/random');

  req.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        displayJoke(data.value);
      } else {
        displayJoke('An error occured (Not a joke)');
      }
    }
  };

  req.send();
}

function displayJoke(text) {
  textDisplay.textContent = text;
}

document.addEventListener('DOMContentLoaded', generateJoke);
generateButton.addEventListener('click', generateJoke);
