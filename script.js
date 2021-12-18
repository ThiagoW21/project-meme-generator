const input = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-insert');
const border = document.getElementById('meme-image-container');
const img = document.getElementById('meme-image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

function addInput() {
  textMeme.innerText = input.value;
}

input.addEventListener('input', addInput);

// aprendi como utilizar o FileReader aqui:
// https://www.w3docs.com/learn-javascript/file-and-filereader.html#filereader-5
function addImage() {
  const reader = new FileReader();

  reader.onload = () => {
    img.src = reader.result;
  };

  reader.onerror = () => {
    img.src = '';
  };

  reader.readAsDataURL(memeImage.files[0]);
}

memeImage.addEventListener('input', addImage);

buttonFire.addEventListener('click', () => {
  border.style.border = '3px dashed red';
});

buttonWater.addEventListener('click', () => {
  border.style.border = '5px double blue';
});

buttonEarth.addEventListener('click', () => {
  border.style.border = '6px groove green';
});

document.addEventListener('click', (event) => {
  if (event.target.className === 'meme') {
    img.src = event.target.src;
  }
});
